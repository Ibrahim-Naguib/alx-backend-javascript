interface Student {
  firstName: string;
  lastName: string;
  age: Number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 18,
  location: 'London',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tableHead: HTMLTableSectionElement = document.createElement('thead');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

const headerRow: HTMLTableRowElement = document.createElement('tr');
const headerFirstname: HTMLTableCellElement = document.createElement('th');
const headerLocation: HTMLTableCellElement = document.createElement('th');

headerFirstname.textContent = 'First Name';
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstname);
headerRow.appendChild(headerLocation);
tableHead.appendChild(headerRow);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const cellFirstname: HTMLTableCellElement = document.createElement('td');
  const cellLocation: HTMLTableCellElement = document.createElement('td');

  cellFirstname.textContent = student.firstName;
  cellLocation.textContent = student.location;

  row.appendChild(cellFirstname);
  row.appendChild(cellLocation);
  tableBody.appendChild(row);
});

table.appendChild(tableHead);
table.appendChild(tableBody);
document.body.appendChild(table);

table.style.border = '1px solid black';
table.style.width = '50%';
table.style.margin = 'auto';
table.style.marginTop = '50px';
table.style.textAlign = 'center';

tableHead.style.backgroundColor = 'lightgray';
tableHead.style.fontWeight = 'bold';
tableBody.style.backgroundColor = 'lightblue';
