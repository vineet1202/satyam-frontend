import { useCallback, useState } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  const dimensionsSetter = useCallback(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, [setDimensions]);

  window.addEventListener("resize", dimensionsSetter);
  window.addEventListener("rotate", dimensionsSetter);

  return dimensions;
};

export default useDimensions;
