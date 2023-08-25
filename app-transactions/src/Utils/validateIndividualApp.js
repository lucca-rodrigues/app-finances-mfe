export default function validateIndividualApp() {
  return window.location.hostname === "localhost" && window.location.port === "3001";
}
