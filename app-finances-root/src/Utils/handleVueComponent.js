import React, { useEffect, useRef } from "react";

export default function HandleVueComponent({ element, id, ...props }) {
  const componentRef = useRef(null);

  useEffect(() => {
    element(componentRef.current, { ...props, route: window.location.pathname });
  }, [props.route]);

  return <div ref={componentRef} id={id} />;
}
