import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: null, height: null });
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return windowSize;
}

export default useWindowSize;
