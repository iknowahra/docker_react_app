const express = require('express');
const mysql = require('mysql');
const db = require('./db');

const app = express();

const port = 5000;

db.pool.query(
  `CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT, 
    PRIMARY KEY (id)
)`,
  (err, results, fileds) => {
    console.log('results', results);
  },
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/hi', (req, res) => {
  res.status(200).send('good');
});

app.get('/api/values', (req, res) => {
  db.pool.query('SELECT * FROM lists;', (err, results, fileds) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});

app.post('/api/value', (req, res, next) => {
  db.pool.query(
    `INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (err, results, fileds) => {
      if (err) return res.status(500).send(err);
      else return res.json({ success: true, value: req.body.value });
    },
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
