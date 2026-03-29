use("companyDatabase");
db.createCollection("employees");
db.employees.insertMany([
  { name: "Alice", department: "HR", salary: 50000 },
  { name: "Bob", department: "Engineering", salary: 80000 },
  { name: "Charlie", department: "Marketing", salary: 60000 },
  { name: "David", department: "Engineering", salary: 90000 },
  { name: "Eve", department: "HR", salary: 55000 },
]);

db.employees.find();
db.employees.find({ department: "IT" }, { name: 1, salary: 1, _id: 0 });
// Find first 3 employees
db.employees.find().limit(3);
// Find top 3 employees with highest salary
db.employees.find().sort({ salary: -1 }).limit(3);
// Find employees with salary greater than 60000
db.employees.find({ salary: { $gt: 60000 } });
// Find employees in Engineering department with salary greater than 70000
db.employees.find({ department: "Engineering", salary: { $gt: 70000 } });
