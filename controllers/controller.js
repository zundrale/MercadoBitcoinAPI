const db = require("../models");
const Order = db.Orders;
const Op = db.Sequelize.Op;
const axios = require('axios');


// Create and Save a new order
exports.create = (req, res) => {
    // Validate request
    if (!req.body.orderType || !req.body.quantity || !req.body.value ) {
      res.status(400).send({
        message: "Missing data"
      });
      return;
    }
  
    // Create an order
    const order = {
      orderType: req.body.orderType,
      quantity: req.body.quantity,
      value: req.body.value
    };
  
    // Save order in the database
    Order.create(order)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the order."
        });
      });
  };


// Delete all orders from the database.
exports.deleteAll = (req, res) => {
    Order.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Orders were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all orders."
        });
      });
  };  

// Update orders in database
exports.update = async function (req, res) {

        let response = await axios.get('https://www.mercadobitcoin.net/api/BTC/orderbook')
        let asks = await response.data.asks    
        let bids = await response.data.bids
        if(asks || bids){
        deleteAll
        asks.forEach((ask)=>{
            const order = {
                orderType: "ASK",
                quantity: ask[0],
                value: ask[1] 
              };
            Order.create(order)
        })
        bids.forEach((bid)=>{
            const order = {
                orderType: "BID",
                quantity: bid[0],
                value: bid[1] 
              };
            Order.create(order)
        })
        res.send({ message: `Orders were updated successfully!` });
    } else {
            res.status(500).send({
                message:
                  err.message || "There is a problem, order not updated."
              });

        }
    
    Order.update(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the orders."
      });
    });
};


// Retrieve all Order from the database according to specific interval.
exports.findAllInterval = (req, res) => {
    const interval = req.query.interval;
    var condition = MOD(value, interval) == 0;
  
    Order.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders."
        });
      });
  };  
