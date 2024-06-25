export default function createIteratorObject(report) {
  const employee = [];
  /* eslint-disable no-unused-vars */
  for (const [depts, emplys] of Object.entries(report.allEmployees)) {
    for (const emp of emplys) {
      employee.push(emp);
    }
  }
  /* eslint-enable no-unused-vars */
  return employee;
}
