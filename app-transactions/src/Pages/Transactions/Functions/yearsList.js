export default function yearsList() {
  const now = new Date().getFullYear();
  const yearsList = [2021];

  if (now > 2021) {
    for (let i = 2022; i <= now + 3; i++) {
      yearsList.push(i);
    }
  }

  return yearsList;
}
