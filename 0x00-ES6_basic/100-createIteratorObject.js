export default function createIteratorObject(report) {
  let arr = []
  for (const key in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, key)) {
      let employees = report.allEmployees[key]
      for (const employe of employees) {
        arr.push(employe)
      }
    }
  }
  return arr
}
