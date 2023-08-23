import React, { useEffect, useRef } from "react";

export default function HandleVueComponent({ element }) {
  const componentRef = useRef(null);
  useEffect(() => {
    element(componentRef.current);
  }, []);
  return <div ref={componentRef}></div>;
}
