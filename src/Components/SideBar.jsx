// Third party
import { useState } from "react";

// User
import { NavLink, Link } from "react-router-dom";
import { Center, CenterCol } from "../Elements/Center";
import { FlexCol } from "../Elements/Flex";

import Settings from "./../assets/img/icons/satyam_sidebar/settings.svg";
import ArrowRight from "./../assets/img/icons/chevron-right.svg";

// type link={
//   icon:Object,
//   link:string,
//   name:string
// }

const LinkElement = ({ link, icon, iconActive, name, navState, className }) => {
  return (
    <NavLink to={link} className={`flex items-center gap-6 ${className} group`}>
      <img
        title={name}
        src={icon}
        id="sidebar"
        className="aspect-square w-6  "
      />
      {navState === "show" && (
        <span className="transition-all group-[.active]:text-blue">{name}</span>
      )}
    </NavLink>
  );
};

const SideBar = ({ links }) => {
  const [navState, setNavState] = useState("collapsed"); //collapsed or show

  const handleNavState = () => {
    setNavState((prevState) =>
      prevState === "collapsed" ? "show" : "collapsed",
    );
  };

  return (
    <FlexCol
      as="aside"
      className="relative items-center justify-between gap-10 rounded-xl bg-white px-6 pb-8 pt-6"
      style={{
        minHeight: "calc(100vh - 2rem)",
      }}
    >
      {/* Show Button */}
      <Center className="absolute left-full top-[15%] h-7  w-7 -translate-x-1/2 rounded-full bg-[#f5f5f5] shadow-lg transition-colors hover:bg-blue">
        <button onClick={handleNavState}>
          <img
            src={ArrowRight}
            className={`aspect-auto w-5 ${navState === "show" ? "rotate-180" : ""}`}
          />
        </button>
      </Center>

      {/* Icon and other links */}
      <CenterCol className="gap-16">
        {navState === "collapsed" && (
          <Link to="" className=" text-4xl font-bold text-blue">
            S
          </Link>
        )}
        {navState === "show" && (
          <Link to="">
            <img
              src="./../logo.png"
              alt="Satyam"
              className=" aspect-auto w-36"
            />
          </Link>
        )}
        <FlexCol className="gap-10">
          {links.map((link) => (
            <LinkElement key={link.link} {...link} navState={navState} />
          ))}
        </FlexCol>
      </CenterCol>

      {/* Settings */}
      <LinkElement
        link="settings"
        icon={Settings}
        navState={navState}
        name="Settings"
      />
    </FlexCol>
  );
};

export default SideBar;
