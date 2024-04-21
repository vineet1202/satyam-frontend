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
import generateExcel from "../../../Functions/generateExcelFile";
import { Center } from "../../../Elements/Center";
import filterUsers from "./filteruser";
import Input from "../../../Components/Input";
import NewUser from "./NewUser";
import Select from "../../../Components/Select";

const users = [
  {
    name: "Viul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",

    _id: "cr766uy7rg4tr4rrgbri",
  },
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "Hello",
    _id: "cr766uy7rg4tr4rrgbri",
  },
];

// generateExcel(users, ["name", "email", "role", "status", "profile", "test", "_id"]);

const Headings = ({ heading, isSort = true, onChangeStateHandler }) => {
  return (
    <Flex className="items-center">
      <h4>{heading}</h4>
      {isSort && <FaSort />}
    </Flex>
  );
};

const roleOptions = [
  { value: "*", label: "Select a role" },
  { value: "satyam-admin", label: "Admin" },
  { value: "satyam-chief-editor", label: "Chief Editor" },
  { value: "satyam-member", label: "Member" },
];
const stateOptions = [
  { value: "*", label: "Select a status" },
  { value: "active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

const ManageUsers = () => {
  const [filterRole, setFilterRole] = useState("*");
  const [filterState, setFilterState] = useState("*");
  const [sortName, setSortName] = useState("asc");
  const [sortEmail, setSortEmail] = useState("asc");
  const [modalState, setModalState] = useState("open");

  const filterRoleToggleHandler = (event) => setFilterRole(event.current.value);
  const filterStateToggleHandler = (event) => setFilterState(event.current.value);
  const sortNameToggleHandler = () => setSortName((sort) => (sort === "asc" ? "desc" : "asc"));
  const sortEmailToggleHandler = () => setSortEmail((sort) => (sort === "asc" ? "desc" : "asc"));
  const modalStateToggleHandler = () => setModalState((state) => (state === "open" ? "closed" : "open"));

  return (
    <section className="ml-12 mr-8  mt-8 mb-6 p-4  rounded-lg bg-white">
      <Flex className="items-center justify-between gap-6">
        <h2 className="text-lg font-bold">
          Manage Users <span className="font-mono ml-1 text-gray-500">({users.length})</span>
        </h2>

        <div className="grid grid-cols-[1fr_1fr] gap-6 items-stretch">
          <Center
            as="button"
            className="gap-2 px-6 py-1 rounded-md transition-all hover:text-white hover:bg-blue text-blue text-lg border-[1px] border-blue">
            <CiExport className="text-xl" />
            Export
          </Center>
          <Center
            as="button"
            className="gap-2 hover:text-blue transition-all hover:bg-white border-[1px] border-blue text-lg py-1 px-6 rounded-md bg-blue text-white">
            <IoAdd className="text-xl" onClick={modalStateToggleHandler} />
            Add User
          </Center>
        </div>
      </Flex>

      <Flex className="items-center">
        <Flex className="items-center">
          <input type="text" placeholder=" Search by name,email,role" />
          <FiSearch className="text-2xl"></FiSearch>
        </Flex>
        <Select options={roleOptions}  onChangeHandler={filterRoleToggleHandler} />
        <Select options={stateOptions} onChangeHandler={filterStateToggleHandler} />
      </Flex>

      <div className="grid  grid-cols-[1fr_2fr_1.2fr_1fr_.1fr]">
        <Headings heading="Name" onChangeStateHandler={sortNameToggleHandler} />
        <Headings heading="Email" onChangeStateHandler={sortEmailToggleHandler} />
        <Headings heading="Role" isSort={false} />
        <Headings heading="Status" isSort={false} />
        <Headings heading="Actions" isSort={false} />

        {filterUsers(users, filterRole, filterState, sortName, sortEmail).map((user) => (
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
      <Modal state={modalState} hideModalHandler={modalStateToggleHandler} className="rounded-3xl">
        <NewUser hideModalHandler={modalStateToggleHandler} />
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
