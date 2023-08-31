export default function getParamId() {
  const url = window.location.href;
  const parts = url.split("/");
  const id = parts[parts.length - 1];

  return Number(id);
}
