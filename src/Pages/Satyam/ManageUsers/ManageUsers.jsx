// Third party
import { Fragment } from "react";
import { CiExport } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

// User
import { Flex } from "../../../Elements/Flex";
import { useState } from "react";
import ProfileImage from "../../../Components/ProfileImage";
import Modal from "../../../Components/Modal";

const users = [
  {
    name: "Viul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
];

const Select = ({ options, onChangeHandler }) => {
  return (
    <select onChange={onChangeHandler}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

const Headings = ({ heading, isSort = true, onChangeStateHandler }) => {
  return (
    <Flex className="items-center">
      <h4>{heading}</h4>
      {isSort && <FaSort />}
    </Flex>
  );
};

const filterUsers = (users, role, state, sortName = "asc", sortEmail = "asc") => {
  if (role !== "*") users = users.filter((user) => user.role === role);
  if (state !== "*") users = users.filter((user) => user.state === state);
  return users.sort((user1, user2) => {
    if (user1.name === user2.name) {
      if (user1.email === user2.email) return 1;
      else if (user1.email > user2.email) return sortEmail === "asc" ? -1 : 1;
      else return sortEmail === "asc" ? 1 : -1;
    } else if (user1.name > user2.name) return sortName === "asc" ? -1 : 1;
    else return sortName === "asc" ? 1 : -1;
  });
};

const ManageUsers = () => {
  const [userRole, setUserRole] = useState("*");
  const [userState, setUserStatus] = useState("*");
  const [sortName, setSortName] = useState("asc");
  const [sortEmail, setSortEmail] = useState("asc");
  const [modalState, setModalState] = useState("shown");
  const userRoleChangeHandler = (event) => setUserRole(event.current.value);
  const userStateChangeHandler = (event) => setUserStatus(event.current.value);
  const sortNameChangeHandler = () => setSortName((sort) => (sort === "asc" ? "desc" : "asc"));
  const sortEmailChangeHandler = () => setSortEmail((sort) => (sort === "asc" ? "desc" : "asc"));
  const modalStateToggleHandler = () => setModalState((state) => ("shown" ? "hidden" : "shown"));

  return (
    <section className="ml-12 mr-8  mt-8 mb-6 p-4  rounded-lg bg-white">
      <Flex className="items-center justify-between">
        <Flex className="gap-3 items-center">
          <h2 className="text-lg font-bold">Manage Users</h2>
          <span className="text-xl text-gray-500">{users.length}</span>
        </Flex>

        <Flex className="gap-6 items-center">
          <Flex
            as="button"
            className="gap-2 items-center px-6 py-1 rounded-md transition-all hover:text-white hover:bg-blue text-blue text-lg border-[1px] border-blue">
            <CiExport className="text-xl" />
            Export
          </Flex>
          <Flex
            as="button"
            className="gap-2 items-center hover:text-blue transition-all hover:bg-white border-[1px] border-blue text-lg py-1 px-6 rounded-md bg-blue text-white">
            <IoAdd className="text-xl" />
            Add User
          </Flex>
        </Flex>
      </Flex>

      <Flex className="items-center">
        <Flex className="items-center">
          <input type="text" placeholder=" Search by name,email,role" />
          <FiSearch className="text-2xl"></FiSearch>
        </Flex>
        <Select
          options={[
            { value: "*", label: "Select a role" },
            { value: "satyam-admin", label: "Admin" },
            { value: "satyam-chief-editor", label: "Chief Editor" },
            { value: "satyam-member", label: "Member" },
          ]}
          onChangeHandler={userRoleChangeHandler}
        />{" "}
        <Select
          options={[
            { value: "*", label: "Select a status" },
            { value: "active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
          onChangeHandler={userStateChangeHandler}
        />
      </Flex>

      <div className="grid  grid-cols-[1fr_2fr_1.2fr_1fr_.1fr]">
        <Headings heading="Name" onChangeStateHandler={sortNameChangeHandler} />
        <Headings heading="Email" onChangeStateHandler={sortEmailChangeHandler} />
        <Headings heading="Role" isSort={false} />
        <Headings heading="Status" isSort={false} />
        <Headings heading="Actions" isSort={false} />

        {filterUsers(users, userRole, userState, sortName, sortEmail).map((user) => (
          <Fragment key={user.email}>
            <Flex className="gap-4 items-center">
              <div className="w-10 h-10">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="w-full aspect-square object-cover object-center" />
                ) : (
                  <ProfileImage name={user.name} fontSize={"text-sm"} />
                )}
              </div>
              <p>{user.name}</p>
            </Flex>
            <p> {user.email}</p>
            <p> {user.role}</p>
            <p> {user.status}</p>
            <p>
              <SlOptionsVertical />
            </p>
          </Fragment>
        ))}
      </div>
      <Modal state={modalState} hideModalHandler={modalStateToggleHandler}>
        <h1 className="bg-red-60">Hello</h1>
      </Modal>
    </section>
  );
};

export default ManageUsers;

{
  /* Header */
}
// <Flex className="items-center] justify-between">
//   <h1>Manage Users</h1>
//   <Flex className="items-center gap-6">
//     <Flex
//       as="button"
//       className="items-center border-2 border-blue text-blue"
//     >
//       Download CSV
//       <img src={CaretDown} alt="" className="aspect-square w-6" />
//     </Flex>
//     <Flex as="button" className="items-center bg-blue text-white">
//       <img src={Plus} alt="" className="aspect-square w-6" />
//       New
//     </Flex>
//   </Flex>
// </Flex>

// <table width="100%">
//   <tr>
//     <th>Name</th>
//     <th>Phone No</th>
//     <th>Role</th>
//     <th>Added On</th>
//     <th>Status</th>
//   </tr>
//   <tr className="text-center">
//     <td>Name</td>
//     <td>Phone No</td>
//     <td>Role</td>
//     <td>Added On</td>
//     <td>Status</td>
//     <td>Delete account</td>
//   </tr>
// </table>
