// -----------------------------
// Question 1: Closure-Based Counter
// -----------------------------

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    },
    current() {
      console.log("Current count:", count);
    }
  };
}

const counter1 = createCounter();
counter1.increment();
counter1.increment();
counter1.decrement();

const counter2 = createCounter();
counter2.increment();
counter2.increment();
counter2.current();


// -----------------------------
// Question 2: Bank Account with Closures
// -----------------------------

function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];

  return {
    deposit(amount) {
      balance += amount;
      transactionHistory.push({ type: "Deposit", amount });
      console.log("Deposited:", amount);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push({ type: "Withdraw", amount });
        console.log("Withdrawn:", amount);
      } else {
        console.log("Insufficient balance");
      }
    },
    checkBalance() {
      console.log("Current Balance:", balance);
    },
    getHistory() {
      console.log(transactionHistory);
    }
  };
}

const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.checkBalance();
account.getHistory();

console.log(account.balance); 
