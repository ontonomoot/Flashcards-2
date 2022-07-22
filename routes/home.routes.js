const homeRoutes = require('express').Router();
const Hello = require('../views/Hello');

homeRoutes.get('/', (req, res) => {
  res.renderComponent(Hello, {title: 'Бобро Пожаловать!', greetings: 'Как твоё имя, умник?'});
});
module.exports = homeRoutes;

