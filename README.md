This project updates a postgre database with orders from MercadoBitcoin and show all the orders in the database according to a specific interval

- GET     `api/orders/book?interval={number}`	         get all Orders according to the specified interval number you insert
- POST    `api/orders/update`                            update database with real time orders from MercadoBitcoin API