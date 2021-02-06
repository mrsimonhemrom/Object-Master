// difference between bind, call and apply:
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Khan',
    salary: 12000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
// normalPerson.chargeBill(500);
// console.log(normalPerson.salary);


// For Call Structure
const heroPerson = {
    firstName: 'balam',
    lastName: 'khan',
    salary: 500,
}
const friendlyPerson = {
    firstName: 'kalam',
    lastName: 'uddin',
    salary: 300,
}

// For call (,)
// normalPerson.chargeBill.call(heroPerson, 250);
// console.log(heroPerson.salary);

// For apply (array)
normalPerson.chargeBill.apply(heroPerson, [100, 50, 25]);
console.log(heroPerson.salary);
