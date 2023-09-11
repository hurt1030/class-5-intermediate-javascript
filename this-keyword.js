// global 'this'
console.log(this);

// implicit binding of 'this'
const person = {
  firstName: "Joe",
  lastName: "Anderson",
  printFullName: function() {
    console.log(`${this.firstName} ${this.lastName}`)
  },
  printFullName2: () => {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

person.printFullName();
person.printFullName2();

// explicit binding of 'this'
function printFullName() {
  console.log(`${this.firstName} ${this.lastName}`)
}
const person2 = {
  firstName: "Jane",
  lastName: "Doe"
};

printFullName.call(person2);

// constructor binding of 'this' (You generally won't see this being used)
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.printFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
  this.printFullName2 = () => {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const person3 = new Person("George", "Washington");
console.log(person3);
person3.printFullName();
person3.printFullName2();