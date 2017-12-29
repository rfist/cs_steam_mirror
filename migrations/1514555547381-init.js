'use strict';
require('./env.js');
let {db} = require('../db.js');

module.exports.up = function (next) {
          // id INT PRIMARY KEY,
  db.query(
      `CREATE TABLE cs_go_pricelist
      (
          name TEXT,
          safe_price INT,
          safe_net_price INT
      );`, function (err) {
        if (err) throw err;
        next()
      });
};

module.exports.down = function (next) {
    db.query(
        `DROP TABLE IF EXISTS cs_go_pricelist`, function (err) {
            if (err) throw err;
            next()
        });
};
