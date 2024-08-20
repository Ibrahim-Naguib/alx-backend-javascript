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
        console.log(`Number of students: ${students.length}`);

        students.forEach((student) => {
          if (!fields[student.field]) {
            fields[student.field] = [];
          }
          fields[student.field].push(student.firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
      }
      resolve(data);
    });
  });
}

module.exports = countStudents;
