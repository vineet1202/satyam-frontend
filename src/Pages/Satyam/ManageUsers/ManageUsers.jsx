// Third party
import { useState } from "react";
import { CiExport } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";
import { FaSort } from "react-icons/fa";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
// User
import { Flex, FlexCenter } from "../../../Elements/Flex";
import ProfileImage from "../../../Components/ProfileImage";
import Modal from "../../../Components/Modal";
import generateExcel from "../../../Functions/generateExcelFile";
import { Center } from "../../../Elements/Center";
import filterUsers from "./filteruser";
import NewUser from "./NewUser";
import Select from "../../../Components/Select";
import { users } from "./users";

const roleOptions = [
  { value: "*", label: "All roles" },
  { value: "satyam-admin", label: "Admin" },
  { value: "satyam-chief-editor", label: "Chief Editor" },
  { value: "satyam-member", label: "Member" },
];
const stateOptions = [
  { value: "*", label: "All status" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

const Headings = ({ heading, isSort = true, onChangeStateHandler }) => {
  return (
    <th className="py-4 group  first-of-type:pl-4 last-of-type:pr-4  ">
      <FlexCenter className="gap-4 group-first-of-type:justify-start  justify-center">
        <h4 className="text-lg tracking-wide font-semibold text-[#131313]">{heading}</h4>
        {isSort && (
          <FaSort className="text-lg hover:text-black transition-all text-[#b9b9b9]" onClick={onChangeStateHandler} />
        )}
      </FlexCenter>
    </th>
  );
};

const Button = styled(Center).attrs({
  className: "gap-2 px-6 py-1 rounded-md transition-all text-lg border-[1px] border-blue",
})``;

const ManageUsers = () => {
  const [filterRole, setFilterRole] = useState("*");
  const [filterState, setFilterState] = useState("*");
  const [sortName, setSortName] = useState("asc"); // "asc" or "desc"
  const [sortEmail, setSortEmail] = useState("asc");
  const [modalState, setModalState] = useState("closed"); //"open" or "closed"
  const [paginate, setPaginate] = useState(1);

  const filteredUsers = filterUsers(users, filterRole, filterState, sortName, sortEmail);
  const noPages = Math.ceil(filteredUsers.length / 10);

  const filterRoleToggleHandler = (event) => setFilterRole(event.target.value);
  const filterStateToggleHandler = (event) => setFilterState(event.target.value);
  const sortNameToggleHandler = () => setSortName((sort) => (sort === "asc" ? "desc" : "asc"));
  const sortEmailToggleHandler = () => setSortEmail((sort) => (sort === "asc" ? "desc" : "asc"));
  const modalStateToggleHandler = () => setModalState((state) => (state === "open" ? "closed" : "open"));
  const handlePaginatePrev = () => setPaginate((paginate) => (paginate == 1 ? paginate : paginate - 1));
  const handlePaginateNext = () => setPaginate((paginate) => (paginate == noPages ? paginate : paginate + 1));

  return (
    <section className="ml-12 mr-8  mt-8 mb-6 p-4  rounded-lg bg-white">
      <FlexCenter className=" justify-between gap-6 mb-6">
        <h2 className="text-lg font-bold">
          Manage Users <span className="font-mono ml-1 text-gray-500">({users.length})</span>
        </h2>

        <div className="grid grid-cols-[1fr_1fr] gap-6 items-stretch">
          <Button
            as="button"
            className=" hover:text-white hover:bg-blue text-blue "
            onClick={() => generateExcel(users, ["name", "email", "role", "status", "profile", "_id"])}>
            <CiExport className="text-xl" />
            Export
          </Button>
          <Button
            as="button"
            className="gap-2 hover:text-blue  hover:bg-white  bg-blue text-white"
            onClick={modalStateToggleHandler}>
            <IoAdd className="text-xl" />
            Add User
          </Button>
        </div>
      </FlexCenter>

      <FlexCenter className="mb-6 justify-between">
        <FlexCenter className=" gap-4 w-2/5 bg-slate-50 rounded-2xl py-3 px-4">
          <FiSearch className="text-2xl text-gray-500"></FiSearch>
          <input
            type="text"
            className="border-none focus:outline-none w-full bg-transparent  placeholder:tracking-wide placeholder:text-gray-500"
            placeholder="Search by name, email, role"
          />
        </FlexCenter>
        <div className="grid gap-6 w-1/3 grid-cols-[1fr_1fr]">
          <Select options={roleOptions} onChangeHandler={filterRoleToggleHandler} />
          <Select options={stateOptions} onChangeHandler={filterStateToggleHandler} />
        </div>
      </FlexCenter>

      <table className="w-full rounded-t-2xl overflow-hidden">
        <tr className="bg-[#f4f4f4]">
          <Headings heading="Member name" onChangeStateHandler={sortNameToggleHandler} />
          <Headings heading="Email" onChangeStateHandler={sortEmailToggleHandler} />
          <Headings heading="Role" isSort={false} />
          <Headings heading="Status" isSort={false} />
          <Headings heading="Delete" isSort={false} />
        </tr>

        {filteredUsers.slice(10 * (paginate - 1), Math.min(10 * paginate, filteredUsers.length)).map((user) => (
          <tr key={user.email} className="text-[#585858]">
            <FlexCenter as="td" className="gap-4 pl-4 py-3 ">
              <div className="w-10 h-10">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="w-full aspect-square object-cover object-center" />
                ) : (
                  <ProfileImage name={user.name} fontSize={"text-sm"} />
                )}
              </div>
              <p className="tracking-wide font-normal">{user.name}</p>
            </FlexCenter>

            <td className="py-3 text-center tracking-wide"> {user.email}</td>

            <td className="py-3">
              <p
                className={`px-6 py-2 rounded-3xl w-fit mx-auto  ${user.role === "satyam-member" && "text-slate-700 bg-slate-100"} ${user.role === "satyam-chief-editor" && "text-yellow-600 bg-yellow-50"} ${user.role === "satyam-admin" && "text-green-500 bg-green-100"}`}>
                {user.role === "satyam-member" ? "Member" : user.role === "satyam-admin" ? "Admin" : "Chief Editor"}
              </p>
            </td>

            <td className="py-3">
              <FlexCenter className="justify-center gap-3">
                <span
                  className={`w-3 h-3 rounded-full ${user.status === "active" ? "bg-green-600" : "bg-red-500 animate-pulse"}`}
                />
                <p className={`${user.status === "active" ? "text-green-600" : "text-red-500"}`}>
                  {user.status[0].toUpperCase() + user.status.slice(1)}
                </p>
              </FlexCenter>
            </td>

            <td className="py-3 ">
              <RiDeleteBin6Line className="text-xl mx-auto text-red-400 hover:text-red-700" />
            </td>
          </tr>
        ))}
      </table>

      <FlexCenter className="justify-center gap-5 my-6">
        <button
          onClick={handlePaginatePrev}
          className="text-blue text-xl mr-4 transition-all hover:scale-110 active:scale-90">
          <FaAnglesLeft />
        </button>
        {Array.from({ length: noPages }).map((_, index) => (
          <Center
            key={index}
            className={`text-lg p-6  font-medium  relative  rounded-full transition-all ${
              paginate === index + 1 ? "bg-slate-200 text-blue" : " text-[#585858] bg-[#f8f8f8] hover:bg-slate-100"
            }`}>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{index + 1}</span>
          </Center>
        ))}
        <button
          onClick={handlePaginateNext}
          className="text-blue text-xl ml-4 transition-all hover:scale-110 active:scale-90">
          <FaAnglesRight />
        </button>
      </FlexCenter>

      <Modal state={modalState} hideModalHandler={modalStateToggleHandler} className="rounded-2xl">
        <NewUser hideModalHandler={modalStateToggleHandler} />
      </Modal>
    </section>
  );
};

export default ManageUsers;
