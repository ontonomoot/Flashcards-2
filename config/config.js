// подключаем библеотеку express
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');

// const getUser = require('../middlewares/getUser');

const morgan = require('morgan');
const ssr = require('../middlewares/reactSsr');

function expressConfig(app) {
  // миддлварки (middlewares, промежуточные фукнции):

  // позволяет запрашивать статический контент
  // (файлы, которые лежат в / public) с нашего сервера
  app.use(express.static(`${__dirname}/../public`));

  // при отправке формы методом POST данные из формы приходят
  // не сервер в зашифрованном виде
  // эта миддлварка расшифровывает их и кладёт в req.body
  app.use(express.urlencoded({ extended: true }));

  // расшифровывает json, который отправляется в запросах от клиента
  app.use(express.json());

  // расшифровывает куки в запросах от клиента
  // app.use(cookieParser());

  // миддлварка для работы с сессиями

  // наша миддлварка для более компактного кода рендеринга
  app.use(ssr);

}

module.exports = expressConfig;
