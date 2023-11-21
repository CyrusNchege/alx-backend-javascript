const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    const result = data.split('\n').map((line) => line.split(','));
    result.shift();
    const newis = result.map((data) => [data[0], data[3]]);
    const fields = new Set(newis.map((item) => item[1]));
    const final = {};
    fields.forEach((data) => { final[data] = 0; });
    newis.forEach((data) => { final[data[1]] += 1; });
    stream.write(`Number of students: ${result.length}\n`);
    fields.forEach((data) => {
      stream.write(`Number of students in ${data}: ${final[data]}. List: ${newis.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`);
    });
  } else {
    throw new Error('Cannot load the database');
  }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname);

module.exports = app;
