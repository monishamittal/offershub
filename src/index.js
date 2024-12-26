const express = require('express');
const path = require('path');
const app = express();

const Frontend_Route = require('./routes/frontend_route');
const PORT = process.env.PORT || '7867';

// View Engine Setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', Frontend_Route);

app.listen(PORT, () => {
  console.log(`Server Started , Port running on ${PORT}` + ' ' + `http://localhost:${PORT}/`);
});
