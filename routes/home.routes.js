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
  const main = React.createElement(Categories, { title: `Твой ответ, ${user}?`, greetings: 'Вопросы дня: ', text1: '111', text2: '2222', text3: '3333' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
homeRoutes.post('/categories/input1', (req, res) => {
  const user = req.body.player;
  const main = React.createElement(Categories, { title: `Твой ответ, ${user}?`, greetings: 'Вопросы дня: ', text1: '111', text2: '2222', text3: '3333' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

homeRoutes.post('/categories/input2', (req, res) => {
  const user = req.body.player;
  const main = React.createElement(Categories, { title: `Твой ответ, ${user}?`, greetings: 'Вопросы дня: ', text1: '111', text2: '2222', text3: '3333' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

homeRoutes.post('/categories/input3', (req, res) => {
  const user = req.body.player;
  const main = React.createElement(Categories, { title: `Твой ответ, ${user}?`, greetings: 'Вопросы дня: ', text1: '111', text2: '2222', text3: '3333' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


module.exports = homeRoutes;
