const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Для работы с фронтендом

// Подключение к базе данных PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'coursework 2',
    password: '123',
    port: 5432,
});

// Обработка данных формы
app.post('/register', async (req, res) => {
  const { fullname, email_us, phone_us, password_us } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO usersss (fullname, email_us, phone_us, password_us) VALUES ($1, $2, $3, $4) RETURNING *',
      [fullname, email_us, phone_us, password_us]
    );
    res.status(200).json({ message: 'Registration successful', user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error during registration' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


  
