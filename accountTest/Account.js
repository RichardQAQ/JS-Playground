class Account{
    constructor(balance, name) {
        this._name = name;
        this._balance = balance;
    }

    get name() {
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get balance() {
        return this._balance;
    }

    set balance(newBalance) {
        this._balance = newBalance;
    }

    addInterest() {
        this._balance *= 1.1; // Add 10% interest
    }
}

// module.exports = Account; // For CommonJS
export default Account;