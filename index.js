const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'Th3gr3at',
  database: 'nbc',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


app.post('/webservice/api/v1/transfers', (req, res) => {
  const { fullName, amount, accountNumber, referenceNumber } = req.body;


  if (!fullName || !amount || !accountNumber || !referenceNumber) {
    return res.status(400).json({ code: '506', message: 'Failure' });
  }

  // Store the data in the MySQL database
  const query = `INSERT INTO transfers (fullName, amount, accountNumber, referenceNumber) VALUES (?, ?, ?, ?)`;
  const values = [fullName, amount, accountNumber, referenceNumber];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error('Error storing data:', error);
      return res.status(500).json({ code: '506', message: 'Failure' });
    }

    return res.json({ code: '500', message: 'Success' });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
