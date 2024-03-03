import { useEffect } from "react";
import { useState } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 500 });

  useEffect(() => {
    if (window) {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
      window.addEventListener("resize", () => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth });
      });
      window.addEventListener("rotate", () => {
        setDimensions({ height: window.innerHeight, width: window.innerWidth });
      });
    }
  }, []);

  return dimensions;
};

export default useDimensions;
