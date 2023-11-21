const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const fields = {};
    lines.forEach((line) => {
      const studentData = line.split(',');
      const field = studentData[3];

      if (fields[field] === undefined) {
        fields[field] = [];
      }

      const firstName = studentData[0];
      if (firstName !== undefined && firstName !== '') {
        fields[field].push(firstName.trim());
      }
    });

    console.log(`Number of students: ${lines.length}`);
    for (const field in fields) {
      const count = fields[field].length;
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
