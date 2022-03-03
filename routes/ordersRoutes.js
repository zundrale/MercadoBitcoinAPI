module.exports = app => {
    const orders = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create Orders
    router.post("/", orders.create);

    // Delete All Orders
    router.post("/", orders.deleteAll);    

    // Update Orders
    router.post("/update", orders.update);


    // Retrieve all order according to interval
    router.get("/book", orders.findAllInterval);

    app.use("/api/orders", router);
};