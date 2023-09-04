export default function getIncomeToBalanceValue(transactions, outcomeValue) {
  const incomeTransactions = transactions?.filter(
    (item) => item.type_transaction === "income" && item.status !== "pendding"
  );
  const sum = incomeTransactions.reduce((sum, transaction) => sum + transaction.value - outcomeValue, 0);
  return sum;
}
