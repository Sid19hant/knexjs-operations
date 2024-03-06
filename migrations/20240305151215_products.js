// ./migrations/xxxx_create_products_table.js
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('price');
      table.integer('user_id').unsigned().references('id').inTable('users');
      // Add other columns as needed
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('products');
  };
  
