// const Account = require('./Account');
import Account from './Account.js';  // Use import statement for ES6 modules

let myAccount = new Account(100000000, 'Jane Doe');
console.log(`Account holder: ${myAccount.name}\nInitial balance: ${myAccount.balance.toFixed(2)}`);
myAccount.addInterest(); // Adds 10% interest
console.log(`Balance after interest: ${myAccount.balance.toFixed(2)}\n`);

// Array tests
let bankAccounts = [];
let amounts = [1000, 2000, 3000];
let names = ['Alice', 'Bob', 'Charlie'];

amounts.forEach((amount, i) => {
    bankAccounts.push(new Account(amount, names[i]));
    console.log(`Account created for ${bankAccounts[i].name} with balance ${bankAccounts[i].balance.toFixed(2)}`);
    bankAccounts[i].addInterest();
});


console.log('Balances after interest:');
bankAccounts.forEach(account => console.log(`${account.name}: ${account.balance.toFixed(2)}`));

// filter the bankAccounts array so that only accounts with a balance greater than 2000 remain
let filteredAccounts = bankAccounts.filter(a => a.balance > 2000);
console.log('\nFiltered accounts (balance > 2000):');
filteredAccounts.forEach(a => console.log(`${a.name}: ${a.balance.toFixed(2)}`));

// Demonstrate the use of reduce to calculate the total balance
let totalBalance = bankAccounts.reduce((total, a) => total + a.balance, 0);
console.log(`\nTotal balance of all accounts: ${totalBalance.toFixed(2)}`);