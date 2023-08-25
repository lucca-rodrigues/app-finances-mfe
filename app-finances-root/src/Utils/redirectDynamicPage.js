export default function redirectDynamicPage(path) {
  // window.history.pushState({}, "", path);
  // window.reload
  window.location.replace(path);
}
