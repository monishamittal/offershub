const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express();
const Backend_Route = require('./routes/backend_route');
const Frontend_Route = require('./routes/frontend_route');
const PORT = process.env.PORT || '7867';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://functionup-radon:radon123@cluster0.q0p7q73.mongodb.net/offershub-website?retryWrites=true&w=majority", {
  useNewUrlParser: true
})
  .then(() => console.log("MongoDb is connected"))
  .catch(err => console.log(err))

// View Engine Setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', Frontend_Route);
app.use('/', Backend_Route);

app.listen(PORT, () => {
  console.log(`Server Started , Port running on ${PORT}` + ' ' + `http://localhost:${PORT}/`);
});