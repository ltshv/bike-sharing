import { useState, useEffect } from "react";

function getWindowDimensions() {
  var screenWidth = window.innerWidth;
  return screenWidth;
}

export default function UseWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  return windowDimensions;
}
