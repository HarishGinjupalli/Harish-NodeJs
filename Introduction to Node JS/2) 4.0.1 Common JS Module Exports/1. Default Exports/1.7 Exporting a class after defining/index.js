const StudentDetails = require("./sample");

const studentDetails = new StudentDetails("Harish", 23, "m");

console.log(studentDetails);

console.log(studentDetails.age);

console.log(
  `${studentDetails.name} , ${studentDetails.age} , ${studentDetails.sex}`
);
