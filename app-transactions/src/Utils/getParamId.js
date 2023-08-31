// export default function getParamId() {
//   const url = window.location.href;
//   const parts = url.split("/");
//   const id = parts[parts.length - 1];

//   return Number(id);
// }

import { useRouter } from "vue-router";

export default function getParamId() {
  const router = useRouter();
  const id = router.currentRoute.params.id;

  return id;
}
