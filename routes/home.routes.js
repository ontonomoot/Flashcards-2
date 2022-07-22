const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');



const homeRoutes = require('express').Router();
const Hello = require('../views/Hello');
const Categories = require('../views/Categories');


homeRoutes.get('/', (req, res) => {
  res.renderComponent(Hello, {title: 'Бобро Пожаловать!', greetings: 'Как твоё имя, умник?'});
});

homeRoutes.post('/categories', (req, res) => {
  const user = req.body.player;
  const main = React.createElement(Categories, { title: 'Categories', greetings: `Your version, ${user}?`, category: ' text1 text2 text3' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
module.exports = homeRoutes;
