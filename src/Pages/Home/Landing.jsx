// Third party modules
import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

// User Modules
import HeroLanding from "./Landing/HeroLanding";
import Grid from "./Grid";
import PublicationProcess from "./Landing/PublicationProcess";
import Header from "./Header";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About/About";
import Faq from "./Faq";
import EditorsPage from "./EditorsPage";

import Modals from "./Modal";
import Footer from "./Footer";
import SideBar from "../../Components/SideBar";

import { LuLayoutDashboard as DashboardIcon } from "react-icons/lu";
import { LuNewspaper as CallPaperIcon } from "react-icons/lu";
import { TfiAnnouncement as AnnouncmenntIcon } from "react-icons/tfi";
import { CgWebsite as ManageWebsiteIcon } from "react-icons/cg";
import { BsJournals as JournalsIcon } from "react-icons/bs";
import { LuUsers as UsersIcon } from "react-icons/lu";
import { HiOutlineMenuAlt2 as MenuIcon } from "react-icons/hi";
import useDimensions from "../../Hooks/useDimensions";

const Landing = () => {
  const isMobile = useDimensions().width < 768;
  const [navState, setNavState] = useState("collapsed");
  const [newsLetterModal, setNewLetterModal] = useState("hidden");

  const handleNavStateToggle = () => setNavState((state) => (state === "collapsed" ? "open" : "collapsed"));
  const handleNewLetterModalToggle = () => setNewLetterModal((state) => (state === "hidden" ? "shown" : "hidden"));

  const links = [
    {
      Icon: DashboardIcon,
      title: "About",
      subLinks: [
        { link: "/#aboutus", title: "About us" },
        { link: "/aboutinstitute", title: "About Institute" },
        { link: "/aim", title: "Aim & Scope" },
        { link: "/abstract", title: "Abstract & Indexing" },
        { link: "/announcment", title: "Announcement" },
        { link: "/editorialboard", title: "Editorial Board" },
      ],
    },
    {
      Icon: DashboardIcon,
      title: "Publish",
      subLinks: [
        { link: "/guidelines", title: "Guidelines for author" },
        { link: "/ieeeformat", title: "IEEE format" },
        { link: "/copyrightform", title: "Download copyright form" },
        { link: "/policies", title: "Policies & Guideliness" },
        { link: "/author", title: "Submission" },
        { link: "/track", title: "Track Submission" },
      ],
    },
    {
      Icon: DashboardIcon,
      title: "Articles & Issues",
      subLinks: [
        { link: "/issue/lates", title: "Latest Issue" },
        { link: "/issues", title: "All Issues" },
        { link: "/issues/special", title: "Special Issues" },
        {
          title: "Subscribe to Newsletter",
          onClickHandlerCustom: () => {
            handleNewLetterModalToggle();
            handleNavStateToggle();
          },
        },
      ],
    },
  ];

  return (
    <>
      <div className="relative mb-20 pb-12">
        <Grid />
        <Header handleNavStateToggle={handleNavStateToggle} />
        <Navbar links={links} />
        {isMobile && <SideBar links={links} navState={navState} navStateToggleHandler={handleNavStateToggle} />}

        <header className="bg-[rgba(255,255,255,.4)]"></header>
        <HeroLanding />
        <About />

        <Routes>
          <Route index element={<HeroLanding />} />
          <Route
            path="/aboutus"
            element={
              <Hero
                heading="About us"
                desc=" Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard"
                id="#aboutus"
              />
            }
          />
        </Routes>
      </div>
      {/* <Routes>
        <Route index element={<About />} />
      </Routes>
      <Routes>
        <Route index element={<PublicationProcess />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/editorspage" element={<EditorsPage />} />
        <Route path="/issues/newsletter" element={<Modals />} />
      </Routes>

      <Routes>
        <Route index element={<Faq />} />
      </Routes>
      <Routes>
        <Route index element={<Footer />} />
      </Routes> */}
    </>
  );
};

export default Landing;
