import { StudentDetails, CarDetails } from "./sample.mjs";

const newStudentDetails = new StudentDetails("hari", 29);
console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new CarDetails("audi", 2900);
console.log(newCarDetails);
console.log(newCarDetails.name);
