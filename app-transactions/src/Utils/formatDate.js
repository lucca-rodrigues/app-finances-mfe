// export default function formatDate(date) {
//   return date ? new Date(date).toLocaleDateString("pt-br") : "-";
// }

export default function formatDate(date) {
  if (!date) {
    return "-";
  }

  const [year, month, day] = date.split("-");
  const formattedDate = `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
  return formattedDate;
}
