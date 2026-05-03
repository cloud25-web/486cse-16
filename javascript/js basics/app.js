/*let person = {
  name: "Drishti",
  class: "b-tech",
  age: 20
};
console.log(typeof(person));

let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(typeof(numbers));

let mixedArray = [1, "Hello" , true, [1,2,3], {name: "Drishti", age:20}];
console.log(mixedArray[0]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

function greet(){
  console.log("Hello world");
}
greet();

function multiply(a,b){
  return a*b;
}
console.log(multiply(2,3));

let square = x => x*x;
console.log(square(4));

//map
let newarray = [1,2,3,4,5];
let squaredArray = newarray.map((num) => num*num);
console.log(squaredArray);

//filter
let number = [1,2,3,4,5,6];
let evenNumbers = number.filter(num => num%2 === 0);
console.log(evenNumbers);

//reduce
let sum = [1,2,3,4,5];
let total = sum.reduce((acc,cv) => acc+cv,0);
console.log(total);

let students = [{name:"alice", marks: 85},
  {name:"bob", marks:92}, {name: "charlie", marks: 78}
];
let marks = students.map(student => student.marks);
console.log(marks);
let names = students.map(student => student.names);
console.log(names);
let toppers = students.filter(student => student.marks>=80);
console.log(toppers);
let totalMarks = students.reduce((acc,student) => acc + student.marks,0);
console.log(totalMarks);*/

let mixedObject = {
  name: "Drishti",
  age: 20,
  hobbies: [reading,writing,coding],
  address: {
    street: "123 Main street",
    city: "New york",
    country: "USA"
  },
  greet: function() {
    console.log("Hello!");
    let arrowGreet = () => {
      console.log("Hi!");
    }
  }
};
console.log(mixedObject.name);
console.log(mixedObject.age);
console.log(mixedObject.hobbies);
console.log(mixedObject.hobbies[2]);
console.log(mixedObject.address);
console.log(mixedObject.address.city);
mixedObject.address.greet();

//object inside array
let people = [
  { name: "Alice" , age: 25},
  { name: "Bob" , age: 30},
  { name: "Charlie" , age: 35}
];
console.log(people[0]);
console.log(people[1].name);
console.log(people[2].age);

//array inside object
let company = {
  name: "Tech Corp",
  employees: ["Alice","Bob","Charlie"]
};
console.log(company.name);
console.log(company.employees);
console.log(company.employees[0]);
console.log(company.employees[1]);
console.log(company.employees[2]);

