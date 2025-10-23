class Employee {
  static employeeCount = 0; // 'employeeCount' is the static property

  constructor(name) {
    this.name = name;
    Employee.employeeCount++;
  }

  // 'getEmployeeCount()' is the static method
  static getEmployeeCount() {
    return Employee.employeeCount;
  }
}

const employee1 = new Employee('Alice');
const employee2 = new Employee('Bob');
const employee3 = new Employee('Smith');

console.log(employee1.employeeCount); // undefined

console.log(Employee.employeeCount); // 3
console.log(Employee.getEmployeeCount()); // 3
