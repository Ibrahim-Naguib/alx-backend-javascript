const express = require('express');
const fs = require('fs');

function countStudents(path) {
  const fields = {};

  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
        lines.shift();
        const students = lines.map((line) => {
          const studentData = line.split(',');
          return {
            firstname: studentData[0],
            lastname: studentData[1],
            age: studentData[2],
            field: studentData[3],
          };
        });
        let output = `Number of students: ${students.length}\n`;

        students.forEach((student) => {
          if (!fields[student.field]) {
            fields[student.field] = [];
          }
          fields[student.field].push(student.firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
          output += (`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
        }
        resolve(output.trim());
      }
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  try {
    const studentData = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${studentData}`);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
