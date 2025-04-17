function processTransactions(transactions) {
    let balance = 0, deposits = 0, withdrawals = 0;
  
    for (let t of transactions) {
      if (t.type === 'deposit') {
        balance += t.amount;
        deposits += t.amount;
      } else if (t.type === 'withdrawal') {
        balance -= t.amount;
        withdrawals += t.amount;
      }
    }
  
    return { finalBalance: balance, totalDeposits: deposits, totalWithdrawals: withdrawals };
  }
  
  const data = [
    { type: 'deposit', amount: 1000 },
    { type: 'withdrawal', amount: 200 }
  ];
  
  const result = processTransactions(data);
  console.log(JSON.stringify(result, null, 2));
  