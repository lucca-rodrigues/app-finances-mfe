import React, { useEffect, useRef } from "react";

export default function HandleVueComponent({ element, ...props }) {
  const componentRef = useRef(null);

  console.log("Props received in HandleVueComponent:", props);
  useEffect(() => {
    element(componentRef.current, { ...props });
  }, []);
  return <div ref={componentRef} id="transactions" oi="oi" userToken={props?.userToken}></div>;
}
