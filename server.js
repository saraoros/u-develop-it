const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'election',
  },
  console.log('Connected to the election database.')
);

//helps to confirm connection with Express.js server when ran
// app.get('/', (req,res) => {
//     res.json({
//         message: "Hello World"
//     });
// });

// This is a key compenent that allows sql commands to be written in Node.js app
db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

//This is a catchall route, will throw error for unknown endpoints
// This route will OVERRIDE other routes
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
