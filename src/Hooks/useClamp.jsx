// Returns the min value if val is less than min
// Returns the max value if val is more than max
const useClamp = (min, val, max) => {
  if (val < min) return min;
  if (val > max) return max;

  return val;
};

export default useClamp;
