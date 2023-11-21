const fs = require('fs');
const path = require('path');
const { argv } = require('process');

function calculateStudentStats(dataPath, outputStream) {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Student data file does not exist');
  }

  const studentData = fs.readFileSync(dataPath, 'utf8');
  const parsedData = [];

  studentData.split('\n').forEach((line) => {
    parsedData.push(line.split(','));
  });

  parsedData.shift(); // Remove header row

  const studentList = [];
  const uniqueStreams = new Set();

  parsedData.forEach((row) => {
    const studentName = row[0];
    const studentStream = row[3];

    studentList.push({ name: studentName, stream: studentStream });
    uniqueStreams.add(studentStream);
  });

  const streamCounts = {};

  uniqueStreams.forEach((stream) => {
    streamCounts[stream] = 0;
  });

  studentList.forEach((student) => {
    streamCounts[student.stream]++;
  });

  outputStream.write(`Total number of students: ${studentList.length}\n`);

  for (const [stream, count] of Object.entries(streamCounts)) {
    const studentNames = studentList
      .filter((student) => student.stream === stream)
      .map((student) => student.name)
      .join(', ');

    outputStream.write(`\nStream: ${stream}
                      Student Count: ${count}
                      Student Names: ${studentNames}\n`);
  }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    const studentDataPath = path.join(argv[2], 'student_data.csv');

    res.write('Student Data Statistics:\n');

    try {
      calculateStudentStats(studentDataPath, res);
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, hostname);

module.exports = app;
