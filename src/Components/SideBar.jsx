// Third party
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

// User
import Logo from "./Logo";
import { FlexCol } from "../Elements/Flex";
import useDimensions from "../Hooks/useDimensions";

const LinkElement = ({ link, Icon, title, navIntState, onClickHandler }) => {
  return (
    <NavLink to={link} className="group flex items-center gap-4" title={title} onClick={onClickHandler}>
      <Icon className="text-[1.7rem] text-[#9897b1] group-[.active]:text-blue" />
      {navIntState === "shown" && <p className="transition-all group-[.active]:text-blue">{title}</p>}
    </NavLink>
  );
};

const SideBar = ({ links, navState: navExtState, navStateToggleHandler: handleNavExtStateToggle }) => {
  const isMobile = useDimensions().width < 768;
  const [navIntState, setNavIntState] = useState(isMobile ? "shown" : "hidden");

  const handleNavIntStateToggle = () => setNavIntState((state) => (state === "shown" ? "hidden" : "shown"));

  return (
    <FlexCol
      as="aside"
      className={`${navExtState === "open" && "animate-[slideRight_.3s_ease-out_forwards] shadow-[1px_0_10px_1000px_rgba(13,11,14,.3)]"} fixed -left-full z-50 min-h-screen max-w-fit gap-12 bg-white  px-7 pb-12 pt-6 transition-all md:relative  md:left-auto md:animate-none md:border-r-[1px]  md:border-r-gray-300   `}>
      <div
        className={`absolute left-full top-[14%] hidden -translate-x-1/2 rounded-full bg-gray-100 p-2 text-base transition-all   md:block ${navIntState === "shown" ? "rotate-180" : "rotate-0"}`}
        onClick={handleNavIntStateToggle}>
        <FaAngleRight />
      </div>

      <div className={`${isMobile ? "flex items-center justify-between self-stretch" : "self-center"}`}>
        <Link to="/">
          <Logo type={navIntState === "shown" ? "long" : "short"} size={isMobile ? 1.8 : 2.2} />
        </Link>
        {isMobile && <IoClose className="text-2xl text-gray-800" onClick={handleNavExtStateToggle} />}
      </div>
      <FlexCol className="gap-10 self-start">
        {links.map((link) => (
          <LinkElement
            key={link.link}
            {...link}
            navIntState={navIntState}
            onClickHandler={isMobile ? handleNavExtStateToggle : () => setNavIntState("hidden")}
          />
        ))}
      </FlexCol>
    </FlexCol>
  );
};

export default SideBar;
