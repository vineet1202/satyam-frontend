const getRoute = (role) => {
  switch (role) {
    case "author":
      return "/author";
    case "reviewer":
      return "/reviewer";
    case "satyam-admin":
    case "satyam-chief-editor":
    case "satyam-member":
      return "/satyam";
    default:
      return "/";
  }
};

export default getRoute;
