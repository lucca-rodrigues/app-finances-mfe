export default function getOutcomeValue(transactions) {
  const outcomeTransactions = transactions.filter((item) => item.type_transaction === "outcome");
  const sum = outcomeTransactions.reduce((sum, transaction) => sum + transaction.value, 0);
  return sum;
}
