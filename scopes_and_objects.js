// TODO: Create a global variable called globalCount\
let globalCount = 0;
// TODO: Create a function that demonstrates local scope
function demonstrateslocalScope() {
  let Localcount = 10;
  console.log("Local Count:", Localcount);
  console.log("Global Count:", globalCount); 
}
// TODO: Create a function that tries to modify both variables
function modifyingCounts() {
  globalCount += 1;
  console.log("Modified Global Count:", globalCount);
}

// TODO: Create a Student constructor function
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}
// TODO: Create several student instances
const student1 = new Student("Tony", 20, "A");
const student2 = new Student("Bob", 22, "B");
const student3 = new Student("Josh", 19, "C");

// TODO: Create an object literal with nested properties
let classroom = {
  roomNumber: 101,
  teacher: {
    name: "Mrs's Marlene",
    subject: "Life science", 
  },
  students: [student1, student2, student3],
};

demonstrateslocalScope();
modifyingCounts();
console.log("Classroom teacher:", classroom.teacher.name);
