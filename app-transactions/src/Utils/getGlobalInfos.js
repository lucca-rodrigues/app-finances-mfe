import { getCookie } from ".";
export default function getGlobalInfos() {
  const globalInfos = JSON.parse(getCookie("@app_myfinances"));

  return {
    ...globalInfos,
  };
}
