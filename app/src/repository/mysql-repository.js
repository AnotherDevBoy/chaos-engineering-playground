'use strict';

const mysql = require('mysql2');

class MySQLRepository {
  constructor() {
    this.pool = mysql.createPool({
      host: 'test-proxy',
      port: 20000,
      user: 'root',
      password: '1234',
      database: 'test',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  async ping() {
    return await this.pool.promise().query('select 1');
  }
}

module.exports = MySQLRepository;
