export default function setToken(token) {
  return window.localStorage.setItem("MFE_Token", token);
}
