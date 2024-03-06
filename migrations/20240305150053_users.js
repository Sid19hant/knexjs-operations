// ./migrations/xxxx_create_users_table.js
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username');
      // Add other columns as needed
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  