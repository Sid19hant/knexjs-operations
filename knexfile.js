module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '2211',
    database: 'new_schema'
  },
  migrations: {
      tableName: 'migrations'
    }
};