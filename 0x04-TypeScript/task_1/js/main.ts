interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: Number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher = (firstName: string, lastName: string): string =>
  `${firstName[0]}. ${lastName}`;

interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

interface StudentConstructor {
  (firstName: string, lastName: string): classInterface;
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Liverpool',
  contract: false,
  numberOfReports: 17,
};

const student1: StudentClass = new StudentClass('Mary', 'Doe');

console.log(teacher1);
console.log(director1);
console.log(student1);
console.log(printTeacher('John', 'Doe'));
console.log(student1.workOnHomework());
console.log(student1.displayName());
