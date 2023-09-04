export default function getBalance(incomeValue, outcomeValue, transactions) {
  // const paidTransactions = transactions.filter((item) => item.status !== "pendding" && item.type !== "income");
  // const sum = incomeValue - paidTransactions?.reduce((sum, transaction) => sum + transaction.value, 0);

  const sum = incomeValue - outcomeValue;
  console.log("incomeValue: " + incomeValue);
  console.log("outcomeValue: " + outcomeValue);
  console.log("sum: " + sum);
  return sum;
}
