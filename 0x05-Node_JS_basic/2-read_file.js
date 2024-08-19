const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length === 0) throw new Error('Cannot load the database');

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

    const fields = {};

    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
