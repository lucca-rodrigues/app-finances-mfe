export default function getIncomeToBalanceValue(transactions) {
  const incomeTransactions = transactions?.filter(
    (item) => item.type_transaction === "income" && item.status !== "pendding"
  );
  const sum = incomeTransactions.reduce((sum, transaction) => sum + transaction.value, 0);
  return sum;
}
