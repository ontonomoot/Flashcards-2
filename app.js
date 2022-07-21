require('@babel/register');
const express = require('express');

const app = express();
const morgan = require('morgan');
const expressConfig = require('./config/config');
const { sequelize } = require('./db/models');

const PORT = process.env.PORT ?? 3000;

// функция настройки экспресса
expressConfig(app);

const homeRoutes = require('./routes/home.routes')
// подключаем роутеры
app.use('/', homeRoutes);




app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(PORT, async () => {
  /* eslint-disable no-console */
  console.log(`Веб-сервер слушает порт ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('БД-сервер подключен успешно');
  } catch (error) {
    console.log('БД-сервер не подключен');
    console.log(error.message);
  }
  /* eslint-enable */
});
