const express = require('express');
const { argv } = require('process');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    const data = await fs.readFile(argv[2], 'utf8');
    const result = data
      .split('\n')
      .map((line) => line.split(','))
      .filter((check) => check.length > 3);

    const newis = result.map((data) => [data[0], data[3]]);
    const fields = new Set(newis.map((item) => item[1]));
    const final = {};

    fields.forEach((data) => {
      final[data] = 0;
    });

    newis.forEach((data) => {
      final[data[1]] += 1;
    });

    res.write(`Number of students: ${result.length}\n`);
    
    for (const field in final) {
      res.write(`Number of students in ${field}: ${final[field]}. List: ${newis.filter((n) => n[1] === field).map((n) => n[0]).join(', ')}\n`);
    }

    res.end();
  } catch (error) {
    res.status(500).send('Internal Server Error\n');
  }
});

app.listen(1245);

module.exports = app;
