module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'XXXX',
    database: 'new_schema'
  },
  migrations: {
      tableName: 'migrations'
    }
};
