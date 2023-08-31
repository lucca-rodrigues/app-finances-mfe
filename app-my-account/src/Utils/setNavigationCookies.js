import Cookies from "js-cookie";

export default function setNavigationCookies(path) {
  return Cookies.set("app_myfinances_navigation", path);
}
