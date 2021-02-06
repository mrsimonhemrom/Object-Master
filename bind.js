// object use bind to borrow method from another object:
const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Khan',
    salary: 12000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// normalPerson.chargeBill(500);
// console.log(normalPerson.salary);


// For Bind Structure
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

// heroPerson
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(50);
console.log("HeroPerson = ", heroPerson.salary);

// friendlyPerson
const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(100);
console.log("FriendlyPerson = ", friendlyPerson.salary)

// normalPerson
console.log("NormalPerson = ", normalPerson.salary);
