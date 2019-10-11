function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.getFullName = function() {
        return `${fname} ${lname}`
    }
}
let firstName='Jo';
let lastName ='Ben';
let person1 = new Person(firstName, lastName);
console.log(person1.getFullName());