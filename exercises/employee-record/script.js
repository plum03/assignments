var employees = [];

function Employee(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status || "Full Time"; // If no status is provided, will default to Full Time
}

Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + "\nTitle: " + this.title + "\nSalary: " + this.salary + "\nStatus: " + this.status);
};

// Instantiate 3 Employee objects:
var ben = new Employee("Ben", "Instructor", 55000, "Part Time");
var betty = new Employee("Betty", "Administrative Assistant", 33000, "Contractor");
var mirandaPriestly = new Employee("Miranda Priestly", "Editor in Chief", "More than all of us");

mirandaPriestly.disposition = "Bitchy";  // can add unique attribute to an object created from constructor function

console.log(mirandaPriestly);

// Call printEmployeeForm
ben.printEmployeeForm();

// Add new employees to an array
employees.push(ben, betty, mirandaPriestly);
console.log(employees);