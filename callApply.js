// object method property review:

const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Khan',
    salary: 12000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(500);
console.log(normalPerson.salary);
normalPerson.chargeBill(400);
console.log(normalPerson.salary);
