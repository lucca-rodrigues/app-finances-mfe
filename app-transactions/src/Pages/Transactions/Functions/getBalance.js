export default function getBalance(incomeValue, transactions) {
  const paidTransactions = transactions.filter((item) => item.status !== "pendding");
  const sum = incomeValue - paidTransactions?.reduce((sum, transaction) => sum + transaction.value, 0);
  return sum;
}
