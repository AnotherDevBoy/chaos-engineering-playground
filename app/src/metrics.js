'use strict';

const Influx = require("influx");
const config = require('./config');
const logger = require('./logger');

const influx = new Influx.InfluxDB({
  host: `${config.influxHost}:8086`,
  database: "test",
  schema: [
    {
      measurement: "latency",
      fields: { value: Influx.FieldType.FLOAT },
      tags: []
    }
  ]
});

module.exports.logLatency = async function logLatency(latency) {
  try {
    await influx.writePoints(
      [
        {
          measurement: "latency",
          fields: { value: latency }
        }
      ],
      {
        database: "test",
        precision: "s"
      });
  } catch(err) {
    logger.error(`Something bad happened`, { err: err, stacktrace: err.stack });
  }
};
