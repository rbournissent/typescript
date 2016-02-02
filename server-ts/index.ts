class Student {
  fullname : string;
  constructor (public firstname, public middlenmae, public lastname) {
    this.fullname = firstname + " " + middlenmae + " " + lastname;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = new Student("Rodrigo", "F.", "Bournissent");

document.body.innerHTML = greeter(user);