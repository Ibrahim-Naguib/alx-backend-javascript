import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const output = [];
      output.push('This is the list of our students');
      const keys = Object.keys(students);
      for (let i = 0; i < keys.length; i+= 1) {
        output.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`)
      }
      response.status(200).send(output.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.param.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(major in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      }
      response.status(200).send(`List: ${students[major].join(', ')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}
