const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const route = express.Router();
const RoomController = require('./controllers/RoomController')

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));

route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)
//Formato que o form de dentro da modal tem que passar a info
route.post('/question/create/:room', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index);


module.exports = route;