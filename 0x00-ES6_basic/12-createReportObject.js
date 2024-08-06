export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employees) {
      let count = 0;
      for (const key in employees) {
        if (Object.prototype.hasOwnProperty.call(employees, key)) {
          count += 1;
        }
      }
      return count;
    },
  };
}
