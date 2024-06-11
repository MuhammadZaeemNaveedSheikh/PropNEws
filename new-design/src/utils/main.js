import date from "../assets/icons/date.svg";
import community from "../assets/icons/community.svg";
import learn from "../assets/icons/learn.svg";
import development from "../assets/icons/development.svg";
import partners from "../assets/icons/partners.svg";

export function getCategoryLogo(category) {
  switch (category) {
    case "date":
    case "news":
      return date;
    case "community":
      return community;
    case "learn":
      return learn;
    case "development":
      return development;
    case "partners":
      return partners;
    default:
      return null;
  }
}

export function formatDate(dateString) {
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
