const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const basicAuth = require('express-basic-auth');
const app = express();
const Backend_Route = require('./routes/backend_route');
const Frontend_Route = require('./routes/frontend_route');
const PORT = process.env.PORT || '7867';

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

mongoose
	.connect('mongodb://offershub_mplc:711Sob8tAOopqyF2yR@51.44.12.191:27017/OffersHub_Website', {
		authSource: 'admin',
		authMechanism: 'SCRAM-SHA-256',
	})
	.then(() => {
		console.log('MongoDb is connected');
	})
	.catch((err) => console.log(err));

// mongoose
// 	.connect(
// 		'mongodb+srv://functionup-radon:radon123@cluster0.q0p7q73.mongodb.net/offershub-website?retryWrites=true&w=majority',
// 		{}
// 	)
// 	.then(() => console.log('MongoDb is connected'))
// 	.catch((err) => console.log(err));

// View Engine Setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', Frontend_Route);
app.use('/', Backend_Route);

app.listen(PORT, () => {
	console.log(`Server Started , Port running on ${PORT}` + ' ' + `http://localhost:${PORT}/`);
});
