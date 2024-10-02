const express = require('express');
const fs = require('fs');

const path = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    res.write('This is the list of our students\n');
    if (err) {
      res.end('Cannot load the database');
    } else {
      const rows = data
        .trim()
        .split('\n')
        .slice(1)
        .map((e) => e.split(','));
      const fields = new Set(rows.map((e) => e[3]));
      res.write(`Number of students: ${rows.length}\n`);
      for (const field of fields) {
        const students = rows.filter((e) => e[3] === field);
        res.write(`Number of students in ${field}: ${students.length}. List: ${students.map((e) => e[0]).join(', ')}\n`);
      }
      res.end();
    }
  });
});

app.listen(1245);

module.exports = app;
