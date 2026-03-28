use("companyDB");

/* Q1
Create a database named companyDB and a collection named employees.
Insert one employee document with fields:
name, age, department, salary
*/

db.createCollection("employees");

db.employees.insertOne({
  name: "vanshika",
  age: 22,
  department: "AI",
  salary: "7lpa",
});

/* Q2
Insert 5 employee documents at once into employees using insertMany().
Each document should contain:
name, age, department, salary, isActive
*/

db.employees.insertMany([
  {
    name: "disha",
    age: 22,
    department: "AI",
    salary: "7lpa",
    isActive: true,
  },
  {
    name: "rishta",
    age: 21,
    department: "AI",
    salary: "7lpa",
    isActive: true,
  },
  {
    name: "tanya",
    age: 21,
    department: "AI",
    salary: "7lpa",
    isActive: true,
  },
  {
    name: "taniya",
    age: 24,
    department: "AI",
    salary: "7lpa",
    isActive: true,
  },
  {
    name: "ritesh",
    age: 23,
    department: "AI",
    salary: "7lpa",
    isActive: true,
  },
]);

/* Q3
Insert 4 documents using insertMany() with ordered: false, where one document intentionally has a duplicate _id.
Observe what happens and explain:
Which documents get inserted? Why?
*/

db.employees.insertOne({
  //_id: 1,
  name: "rekha",
  age: 50,
  department: "maths",
  salary: "14lpa",
  isActive: true,
});

db.employees.insertMany(
  [
    {
      // _id: 5,
      name: "rani",
      age: 52,
      department: "maths",
      salary: "14lpa",
      isActive: true,
    },
    {
      // _id: 1, // duplicate _id
      name: "anil",
      age: 50,
      department: "MCA",
      salary: "14lpa",
      isActive: true,
    },
    {
      // _id: 3,
      name: "piyush",
      age: 24,
      department: "medical",
      salary: "14lpa",
      isActive: true,
    },
    {
      //_id: 4,
      name: "mritunjay",
      age: 22,
      department: "engg",
      salary: "14lpa",
      isActive: true,
    },
  ],
  { ordered: false },
);

/*
Result:
- _id: 5 inserted
- _id: 1 fails (duplicate)
- _id: 3 inserted
- _id: 4 inserted

Reason:
- _id must be unique
- duplicate _id causes error
- ordered: false allows MongoDB to continue inserting remaining valid documents
*/

/* Q4
Create a collection products and insert documents where:
- one field name contains a space
- one field name starts with uppercase letters
- one field name uses normal camelCase
Then write queries to retrieve each field correctly.
*/

db.createCollection("products");

db.products.insertOne({
  "product name": "Laptop",
  Price: 1000,
  productCategory: "electronics",
});

db.products.find({}, { "product name": 1, _id: 0 });
db.products.find({}, { Price: 1, _id: 0 });
db.products.find({}, { productCategory: 1, _id: 0 });
let products = db.products.find().toArray();
products.forEach((product) => {
  print("Product Name: " + product["product name"]);
  print("Price: " + product.Price);
  print("Category: " + product.productCategory);
});

/**
 * Insert 3 documents into students collection:

one with name: "Rahul"
one with name: "rahul"
one with name: "RAHUL"

Write queries to show how case-sensitive matching behaves in MongoDB.
 */
db.createCollection("students");
db.students.insertMany([
  { name: "Rahul" },
  { name: "rahul" },
  { name: "RAHUL" },
]);
db.students.find({ name: "Rahul" });
db.students.find({ name: "rahul" });
db.students.find({ name: "RAHUL" });
