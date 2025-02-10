require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const basicAuth = require('express-basic-auth');
const app = express();
const Backend_Route = require('./routes/backend_route');
const Frontend_Route = require('./routes/frontend_route');
const isProduction = process.env.NODE_ENV === 'production';
const PORT = isProduction ? 7867 : 7867;

const users = {
	'manager@offershub.com': 'go2oh@admin',
};

const basicAuthMiddleware = basicAuth({
	users,
	challenge: true,
	unauthorizedResponse: 'Unauthorized Access!',
});

app.use(['/create-content', '/leads/get'], basicAuthMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

const cluster = isProduction
	? process.env.MONGODB_PROD_CONNECTION_URL
	: process.env.MONGODB_DEV_CONNECTION_URL;

const authentication_mechanism = isProduction
	? {
			authSource: 'admin',
			authMechanism: 'SCRAM-SHA-256',
	  }
	: {};

mongoose
	.connect(cluster, authentication_mechanism)
	.then(() => console.log('Connected to MongoDb => ' + `${isProduction ? 'Production' : 'Development'}`))
	.catch((err) => console.log(err));

// View Engine Setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', Frontend_Route);
app.use('/', Backend_Route);

app.listen(PORT, () => {
	console.log(`Server Started , Port running on ${PORT}` + ' ' + `http://localhost:${PORT}/`);
});
