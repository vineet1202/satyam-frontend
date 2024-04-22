import { useCallback, useState, useEffect } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 500 });

  const dimensionsSetter = useCallback(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, [setDimensions]);

  useEffect(() => {
    dimensionsSetter();
  }, []);

  window.addEventListener("resize", dimensionsSetter);
  window.addEventListener("rotate", dimensionsSetter);

  return dimensions;
};

export default useDimensions;
