const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');

const homeRoutes = require('express').Router();
const Hello = require('../views/Hello');
const Themes = require('../views/Themes');
const Chosen = require('../views/Chosen');
const { Categories } = require('../db/models');

homeRoutes.get('/', (req, res) => {
  res.renderComponent(Hello, { title: 'Бобро Пожаловать!', greetings: 'Как твоё имя, умник?' });
});

homeRoutes.post('/categories', async (req, res) => {
  const user = req.body.player;
  const themes = await Categories.findAll({ raw: true });
  const list = themes.map((el) => el.title)
  // console.log(list);

  const main = React.createElement(Themes, {
    title: `Твой ответ, ${user}?`, greetings: 'ТЕМЫ ДНЯ: ', text1: `${list[0]}`, text2: `${list[1]}`, text3: `${list[2]}`,
  });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

homeRoutes.post('/categories/input1', (req, res) => {
  const main = React.createElement(Chosen, { theme: ' ТЕМА СТРАННЫЕ ДНИ', quest: 'Вопрос 1:....' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = homeRoutes;
