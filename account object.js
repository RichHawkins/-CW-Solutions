const account = {
    name: 'Alex',
    balance: 0,
    credit(number) {
        return account.balance += number;
        
    },
    describe() {
        return `Alex, balance ${this.balance}`
  } 
} 
account.credit(25);
console.log(account.describe());