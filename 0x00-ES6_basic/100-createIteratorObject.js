export default function createIteratorObject(report) {
  const arr = [];
  for (const key in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, key)) {
      const employees = report.allEmployees[key];
      for (const employe of employees) {
        arr.push(employe);
      }
    }
  }
  return arr;
}
