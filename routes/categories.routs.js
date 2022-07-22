const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');


const categoryRoutes = require('express').Router();
const Categories = require('../views/Categories');



categoryRoutes.post('/categories', (req, res) => {
  const user = req.body.player;
  const main = React.createElement(Categories, { title: 'Categories', greetings: `Your version, ${user}?`, category: ' text1 text2 text3' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
  // res.redirect('/categories');

  // res.renderComponents(Category, {title: 'Categories', greetings: `Твой ответ ${user}`, category: 'КАКИЕ-ТО ВОПРОСЫ' })  
  // console.log(user);
});

module.exports = categoryRoutes;
