// Third party
import { lazy, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";
import { LuNewspaper as CallPaperIcon } from "react-icons/lu";
import { TfiAnnouncement as AnnouncmenntIcon } from "react-icons/tfi";
import { CgWebsite as ManageWebsiteIcon } from "react-icons/cg";
import { BsJournals as JournalsIcon } from "react-icons/bs";
import { LuUsers as UsersIcon } from "react-icons/lu";
import { HiOutlineMenuAlt2 as MenuIcon } from "react-icons/hi";

// User
import SideBar from "../../Components/SideBar";
import Searchbar from "./Searchbar";
import { Flex } from "../../Elements/Flex";
import { useEffect } from "react";
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const ManageUsers = lazy(() => import("./ManageUsers/ManageUsers"));

const links = [
  {
    Icon: DashboardIcon,
    link: "/satyam",
    title: "Dashboard",
  },
  {
    Icon: ManageWebsiteIcon,
    link: "/satyam/managewebsite",
    title: "Manage Website",
  },
  {
    Icon: JournalsIcon,
    link: "/satyam/journals",
    title: "Journals",
  },
  {
    Icon: CallPaperIcon,
    link: "/satyam/callpaper",
    title: "Call for paper",
  },
  {
    Icon: AnnouncmenntIcon,
    link: "/satyam/announcement",
    title: "Announcement",
  },
  {
    Icon: UsersIcon,
    link: "/satyam/manageusers",
    title: "Manage Users",
  },
];

function getScrollbarWidth() {
  return document.documentElement.clientHeight < document.documentElement.scrollHeight
    ? `${window.innerWidth - document.documentElement.clientWidth}px - 20px`
    : "0px";
}

const Main = styled.main.attrs({
  className: "md:no-scrollbar  bg-[#f9faff] relative md:absolute md:left-full md:top-0 md:h-full  md:overflow-y-scroll",
})`
  @media screen and (min-width: 768px) {
    width: calc(100vw - 100%);
  }
`;

const Satyam = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.token || !user.name || !user.email || !user?.default_role?.startsWith("satyam")) {
      const redirect = window.location.pathname;
      navigate(`/auth/login?redirect=${redirect}`);
      toast.error("Please login first");
    }
  }, [user]);

  const [navState, setNavState] = useState("collapsed");
  const handleNavStateToggle = () => setNavState((state) => (state === "collapsed" ? "open" : "collapsed"));

  return (
    <div className="overflow-x-hidden">
      <div className="relative block  md:inline-block ">
        <SideBar links={links} navState={navState} navStateToggleHandler={handleNavStateToggle} />
        <Main>
          <Flex className="items-center justify-stretch border-b-[1px] border-gray-300 bg-white py-3">
            <div
              className="border-r-[1px] border-r-gray-300 px-2 text-3xl xsm:px-3 sm:px-4 md:hidden"
              onClick={handleNavStateToggle}>
              <MenuIcon />
            </div>
            <Searchbar />
          </Flex>

          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="manageusers" element={<ManageUsers />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
};

export default Satyam;
