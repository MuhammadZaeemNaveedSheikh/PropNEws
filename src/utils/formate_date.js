function formatDate(dateString) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
//   const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]}`;
}

export default formatDate;