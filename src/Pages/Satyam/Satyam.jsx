import { Routes, Route } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import Manage from "./../../assets/img/icons/satyam_sidebar/manage.svg";
import Journals from "./../../assets/img/icons/satyam_sidebar/journals.svg";
import Users from "./../../assets/img/icons/satyam_sidebar/users.svg";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { Flex } from "../../Elements/Flex";

const links = [
  {
    icon: Manage,
    link: "manage",
    name: "Manage Website",
  },
  {
    icon: Journals,
    link: "jorunals",
    name: "Uploaded Journals",
  },
  {
    icon: Users,
    link: "users",
    name: "Manage Users",
  },
];

const Satyam = () => {
  return (
    <div className="grid grid-cols-[auto_auto] gap-5 bg-[#f5f5f5] p-4">
      <SideBar links={links} />
      <main>
        <Flex className="mb-4 items-center justify-between rounded-2xl bg-white px-6 py-3">
          <SearchBar />
          <Profile />
        </Flex>
        <Routes>
          <Route
            index
            element={
              <h1>
                This is main pageThis is main pageThis is main pageThis is main
                page This is main page This is main pageThis is main page This
                is main page This is main page This is main page This is main
                page This is main page This is main pageThis is main page This
                is main page This is main page This is main page This is main
                page This is main page This is main page This is main page This
                is main page This is main page This is main page This is main
                page This is main page This is main page This is main pageThis
                is main pageThis is main pageThis is main page This is main page
                This is main page This is main page This is main page This is
                main page This is main page This is main page This is main
                pageThis is main pageThis is main pageThis is main page This is
                main page
              </h1>
            }
          ></Route>
          <Route path="manage" element={<h1>This is manage page</h1>}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default Satyam;
