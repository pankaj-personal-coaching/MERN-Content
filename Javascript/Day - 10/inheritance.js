class Person {
  constructor(firstName, lastName, age, gender, country, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.country = country;
    this.address = address;
  }
  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

class Student extends Person {
  constructor(
    firstName,
    lastName,
    age,
    gender,
    country,
    address,
    grade,
    marks
  ) {
    super(firstName, lastName, age, gender, country, address);
    this.grade = grade;
    this.marks = marks;
  }
}

// Parent(Person) -> Child(Student(parent) -> ABC(child of Student))
// Person -> Student -> ABC
class ABC extends Student {
  constructor(
    firstName,
    lastName,
    age,
    gender,
    country,
    address,
    grade,
    marks,
    temp
  ) {
    super(firstName, lastName, age, gender, country, address, grade, marks);
    this.temp = temp;
  }
}

class Employee extends Person {
  constructor(
    firstName,
    lastName,
    age,
    gender,
    country,
    address,
    company,
    designation
  ) {
    super(firstName, lastName, age, gender, country, address);
    this.company = company;
    this.designation = designation;
  }
}

const student = new Student(
  "Rohit",
  "Sharma",
  36,
  "Male",
  "India",
  "Mumbai",
  "7th",
  "87%"
);

const emp = new Employee(
  "Virat",
  "Kohli",
  36,
  "Male",
  "India",
  "New Delhi",
  "Infosys",
  "Intern"
);
console.log(student);
console.log(emp);

const abc = new ABC(
  "Surya",
  "Yadav",
  45,
  "Male",
  "India",
  "Kolkata",
  "8th",
  "78%",
  "Some value"
);

console.log(abc);
