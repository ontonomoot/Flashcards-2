const homeRoutes = require('express').Router();
const Hello = require('../views/Hello')


homeRoutes.get('/', (req,res)=>{
  res.renderComponent(Hello)
})


module.exports = homeRoutes;