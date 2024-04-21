const filterUsers = (users, filterRole, filterState, sortName = "asc", sortEmail = "asc") => {
  if (filterRole !== "*") users = users.filter((user) => user.role === filterRole);
  if (filterState !== "*") users = users.filter((user) => user.state === filterState);

  return users.sort(({ name: name1, email: email1 }, { name: name2, email: email2 }) => {
    if (name1 === name2) {
      if (email1 === email2) return 1;
      else if (email1 > email2) return sortEmail === "asc" ? -1 : 1;
      else return sortEmail === "asc" ? 1 : -1;
    } else if (name1 > name2) return sortName === "asc" ? -1 : 1;
    else return sortName === "asc" ? 1 : -1;
  });
};

export default filterUsers;
