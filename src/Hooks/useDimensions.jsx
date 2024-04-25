import { useCallback, useState, useEffect } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  const dimensionsSetter = useCallback(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, [setDimensions]);

  useEffect(() => {
    window.addEventListener("resize", dimensionsSetter);
    window.addEventListener("rotate", dimensionsSetter);

    return () => {
      window.removeEventListener("resize", dimensionsSetter);
      window.removeEventListener("rotate", dimensionsSetter);
    };
  }, []);

  return dimensions;
};

export default useDimensions;
