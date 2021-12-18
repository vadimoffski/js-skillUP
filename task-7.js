//Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    let newTransaction = {
      id: Math.floor(Math.random() * 5),
      amount: amount,
      type: type,
    };
    this.transactions.push(newTransaction);
  },
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },
  withdraw(amount) {
    if (this.balance < amount) {
      return "недостаточно средств";
    }
    this.balance = this.balance - amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
  },
  getBalance() {
    console.log(this.balance);
  },
  getTransactionDetails(id) {
    let info = this.transactions.filter((item) => item.id == id);
    console.log(info);
  },
  getTransactionTotal(type) {
    let info = this.transactions.filter((item) => item.type === type);
    console.log(info);
  },
};

account.withdraw(200);
account.getBalance();
account.deposit(500);
account.deposit(300);
account.deposit(200);
account.deposit(100);
account.deposit(50);
account.withdraw(1000);
account.getBalance();
console.log(account.transactions);
account.getTransactionDetails("3");
account.getTransactionTotal("deposit");
account.getTransactionTotal("withdraw");
