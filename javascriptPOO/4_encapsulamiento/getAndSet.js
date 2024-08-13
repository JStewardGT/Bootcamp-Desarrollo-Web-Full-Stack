class Account {
  constructor(accountNumber, balance, name) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._name = name;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Monto inválido");
    } else {
      this._balance += amount;
    }
  }

  withdraw(quantity) {
    if (quantity <= this._balance) {
      this._balance -= quantity;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    if (newBalance < 0) {
      console.log("El salfo no puede ser negativo");
    } else {
      this._balance = newBalance;
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === "") {
      console.log("El nombre no puede ser vacío");
    } else {
      this._name = newName;
    }
  }
}

const myAccount = new Account("123456789", 1000, "Juan");
myAccount.balance = 1500;
console.log(myAccount.balance); // Output: 1500
myAccount.name = "Pedro";
console.log(myAccount.name); // Output: Pedro
