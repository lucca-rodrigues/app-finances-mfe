export default function getIncomeValue(transactions) {
  const incomeTransactions = transactions?.filter((item) => item.type_transaction === "income");
  const sum = incomeTransactions.reduce((sum, transaction) => sum + transaction.value, 0);
  return sum;
}
