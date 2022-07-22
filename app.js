require('@babel/register');

const express = require('express');
const { sequelize } = require('./db/models');
const homeRoutes = require('./routes/home.routes');
const categoryRoutes = require('./routes/categories.routs');
const config = require('./config/config');
// const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT ?? 3000;

// Config
config(app);

// Routing
app.use('/', homeRoutes);
app.use('/categories', categoryRoutes);

// Listen
app.listen(PORT, async () => {
  try {
    console.log(`Server started at ${PORT} port`);
    await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
