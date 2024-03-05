export default () => {
  const hour = new Date().getHours();
  console.log(hour);
  if (hour >= 5) return "Good Morning";
  else if (hour >= 11) return "Good Afternoon";
  else if (hour < 5 || hour > 17) return "Good Evening";
};
