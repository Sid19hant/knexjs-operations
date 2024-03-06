var express = require('express');
var router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig);
// db('users')
//   .where({ id: 6 })
//   .update({ id: 5 })
//   .then(() => {
//     console.log('User updated successfully');
//   })
// groupBy
// db('products')
//   .select('user_id', db.raw('COUNT(*) as product_count'))
//   .groupBy('user_id')
//   .then(rows => {
//     console.log(rows);
//   });
// // distinct
// db('products')
//   .distinct('user_id')
//   .then(rows => {
//     console.log(rows);
//   });


// // Example query
// db.select('*').from('employee')
//   .then(rows => {
//     console.log(rows);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// Insert a new record into the 'users' table
// db.raw("SELECT VERSION()").then(()=>{
//   console.log("connected to db");
// })
// db('users') .insert([
//   { username: 'user1' },
//   { username: 'user2' },
//   { username: 'user3' },
//   { username: 'user4' },
//   { username: 'user5' },
//   { username: 'user6' },
//   { username: 'user7' },
//   { username: 'user8' },
//   { username: 'user9' },
//   { username: 'user10' }
  
  

// ]).then(rows=>{
//   console.log(rows);
// });
// db('products') .insert([
//   { name: 'product5', price: 10.99, user_id: 1},
// //   { name: 'product2', price: 15.99, user_id: 2 },
// //   { name: 'product3', price: 20.49, user_id: 3 },
// //   { name: 'product4', price: 25.99, user_id: 4 },
// //   { name: 'product5', price: 30.99, user_id: 5 },
// //   { name: 'product6', price: 35.49, user_id: 6 },
// //   { name: 'product7', price: 40.99, user_id: 7 },
// //   { name: 'product8', price: 45.99, user_id: 8 },
// //   { name: 'product9', price: 50.49, user_id: 9 },
// //   { name: 'product10', price: 55.99, user_id: 10 }
// // orderBy
// db('products')
//   .select('*')
//   .orderBy('price', 'desc') // Order by price ascending
//   .then(rows => {
//     console.log(rows);
//   });
// // first
// db('products')
//   .select('*')
//   .orderBy('id') // Order by id ascending
//   .first()
//   .then(row => {
//     console.log(row);
//   });
// // offset
// db('products')
//   .select('*')
//   .offset(2) // Skip the first 10 rows
//   .then(rows => {
//     console.log(rows);
//   });
// // count

// db('products')
//   .count('id as total_count')
//   .then(result => {
//     console.log(result[0].total_count); // Access count value from the first object in the array
//   });




  
  

// ]).then(rows=>{
//   console.log(rows);
// });
// db('users')
//   .where('id',5)
//   .del()
//   .then(() => {
//     console.log('User deleted successfully');
//   })



/* GET home page. */
// router.get('/', async function(req, res, next) {
//   const users=await db
//   .from('users')
//   .select('username')
//   res.json(users)
// });
// router.get('/s', async function(req, res, next) {
//   const john=await db
//   .from('users')
//   .select('username','id')
//   .where({username:'john'})
//   res.json(john)
// });
// async function deleteUsersInRange(startId, endId) {
//     try {
//       // Delete users within the specified range of user IDs
//       await db('users')
//         .whereBetween('id', [startId, endId])
//         .del();
  
//       console.log(`Users with IDs between ${startId} and ${endId} have been deleted.`);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       // Don't forget to destroy the connection
//       db.destroy();
//     }
//   }
// const startID=10
// const endID=50
// deleteUsersInRange(startID,endID);
// // joins
// db('products')
//   .select('products.*', 'users.username')
//   .join('users', 'products.user_id', 'users.id')
//   .then(rows => {
//     console.log(rows);
//   });
// // innerJOIN
// db('products')
//   .select('products.*', 'users.username')
//   .innerJoin('users', 'products.user_id', '=', 'users.id')
//   .then(rows => {
//     console.log(rows);
//   });
// // leftJoin
// db('products')
//   .select('products.*', 'users.username')
//   .leftJoin('users', 'products.user_id', '=', 'users.id')
//   .then(rows => {
//     console.log(rows);
//   });
// // rightJoin
// db('products')
//   .select('products.*', 'users.username')
//   .rightJoin('users', 'products.user_id', '=', 'users.id')
//   .then(rows => {
//     console.log(rows);
//   });



module.exports = router;

