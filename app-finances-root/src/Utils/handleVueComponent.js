import React, { useEffect, useRef } from "react";

export default function HandleVueComponent({ element, id = "new-app", ...props }) {
  const componentRef = useRef(null);

  console.log("Props received in HandleVueComponent:", props);
  useEffect(() => {
    element(componentRef.current, props);
  }, []);
  return <div ref={componentRef} id={id} />;
}
