import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function HandleVueComponent({ element, id, ...props }) {
  const componentRef = useRef(null);

  useEffect(() => {
    element(componentRef.current, { ...props, route: window.location.pathname });
  }, [props.route]);

  return <div ref={componentRef} id={id} />;
}
