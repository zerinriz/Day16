class Person {
    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    getperson() {
        var personInfo;
        return personInfo = `Name: ${this._name}, email: ${this._email}, age: ${this._age}`;
    }
}
let person = new Person("zerin", "zeriin", 20);
console.log(person.getperson());
module.exports = Person;