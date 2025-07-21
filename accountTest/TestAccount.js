// const Account = require('./Account');
import Account from './Account.js';  // Use import statement for ES6 modules

let myAccount = new Account(100000000, 'Jane Doe');
console.log(`Account holder: ${myAccount.name}\nInitial balance: ${myAccount.balance.toFixed(2)}`);
myAccount.addInterest(); // Adds 10% interest
console.log(`Balance after interest: ${myAccount.balance.toFixed(2)}`);