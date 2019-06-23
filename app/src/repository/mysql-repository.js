'use strict';

const mysql = require('mysql2');

class MySQLRepository {
  constructor(host, port, maxConnections) {
    this.pool = mysql.createPool({
      host: host,
      port: port,
      user: 'root',
      password: '1234',
      database: 'test',
      connectionLimit: maxConnections
    });
  }

  async ping() {
    return await this.pool.promise().query('select 1');
  }
}

module.exports = MySQLRepository;
