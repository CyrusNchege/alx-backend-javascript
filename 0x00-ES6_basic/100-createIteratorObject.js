export default function createIteratorObject(report) {
  function* generateEmployees() {
    for (const department in report.allEmployees) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }

  const employeesIterator = generateEmployees();

  return {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          return employeesIterator.next();
        },
      };
    },
  };
}
