const account = {
    balance: 1000,
    transactions: [],
    
    deposit(amount) {
      this.balance += amount;
      this.transactions.push({ type: 'deposit', amount });
    },
    
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        this.transactions.push({ type: 'withdrawal', amount });
      } else {
        console.log('Insufficient funds');
      }
    },
    
    getBalance() {
      return this.balance;
    },
    
    getTransactionHistory() {
      return [...this.transactions];
    },
  };
  
  // Приклад використання
  account.deposit(500);
  account.withdraw(200);
  console.log(account.getBalance()); // Виведе 1300
  console.log(account.getTransactionHistory()); // Виведе [{ type: 'deposit', amount: 500 }, { type: 'withdrawal', amount: 200 }]
  