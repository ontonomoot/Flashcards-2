const router = require('express').Router();
const { order } = require('../db/models');
const OrderList = require('../views/OrderList');
const OrderCard = require('../views/OrderCard');

// /orders
router.get('/', (req, res) => {
  order.findAll({ raw: true })
    .then((arrOrders) => {
      res.renderComponent(OrderList, { arrOrders, version: process.version });
    })
    .catch((err) => res.status(500).send(`Error: ${err}`));
});

router.post('/', (req, res) => {
  const { title, type } = req.body;

  order.create({ title, type })
    .then((data) => {
      console.log(data);
      res.renderComponent(OrderCard, { order: { title, type } }, { doctype: false });
    });
});

// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;

//   const deleteOrder = await order.destroy({ where: { id } });

//   console.log(deleteOrder);

//   if (deleteOrder) {
//     res.json({ delete: true })
//   } else {
//     res.status(404).json({ delete: false })
//   }

// })

module.exports = router;
