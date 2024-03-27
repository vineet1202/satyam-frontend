import { Flex } from "../../../Elements/Flex";
import Plus from "./../../../assets/img/icons/plus.svg";
import CaretDown from "./../../../assets/img/icons/caret-down.svg";

const data = [
  {
    name: "Vipul Goel",
    email: "vipul1234test@gmail.com",
    role: "admin",
    status: "active",
    profile: "",
    _id: "cr766uy7rg4tr4rrgbri",
  },
];

const ManageUsers = () => {
  return (
    <>
      {/* Header */}
      <Flex className="items-center] justify-between">
        <h1>Manage Users</h1>
        <Flex className="items-center gap-6">
          <Flex
            as="button"
            className="items-center border-2 border-blue text-blue"
          >
            Download CSV
            <img src={CaretDown} alt="" className="aspect-square w-6" />
          </Flex>
          <Flex as="button" className="items-center bg-blue text-white">
            <img src={Plus} alt="" className="aspect-square w-6" />
            New
          </Flex>
        </Flex>
      </Flex>

      <table width="100%">
        <tr>
          <th>Name</th>
          <th>Phone No</th>
          <th>Role</th>
          <th>Added On</th>
          <th>Status</th>
        </tr>
        <tr className="text-center">
          <td>Name</td>
          <td>Phone No</td>
          <td>Role</td>
          <td>Added On</td>
          <td>Status</td>
          <td>Delete account</td>
        </tr>
      </table>
    </>
  );
};

export default ManageUsers;
