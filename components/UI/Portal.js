import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = (props) => {
  const [mounted, setMounted] = useState(false);
  const { children } = props;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById("navigation")
  );
};

export default Portal;
