// Third party
import { NavLink, Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

// User
import Logo from "./Logo";
import { FlexCol } from "../Elements/Flex";
import useDimensions from "../Hooks/useDimensions";

const LinkElementWithChild = ({ Icon, title, subLinks, navState, onClickHandler, className }) => {
  return (
    <div className={`group grid grid-cols-[1fr_5fr] gap-4 items-center ${className}`}>
      <Icon className="text-[1.7rem] text-[#9897b1] group-[.active]:text-blue" />
      {navState === "open" && <p className="transition-all text-xl group-[.active]:text-blue">{title}</p>}
      
      <FlexCol className="col-[2/3] gap-3 items-start">
        {subLinks.map(({ link, title, onClickHandlerCustom }) =>
          link ? (
            <NavLink key={title} to={link} onClick={onClickHandler} className="group">
              <p className={`group-[.active]:text-blue`}>{title}</p>
            </NavLink>
          ) : (
            <button key={title} onClick={onClickHandlerCustom}>
              {title}
            </button>
          )
        )}
      </FlexCol>
    </div>
  );
};

const LinkElement = ({ link, Icon, title, navState, onClickHandler, className }) => {
  return (
    <NavLink to={link} className={`group flex items-center gap-4 ${className}`} title={title} onClick={onClickHandler}>
      <Icon className="text-[1.7rem] text-[#9897b1] group-[.active]:text-blue" />
      {navState === "open" && <p className="transition-all group-[.active]:text-blue">{title}</p>}
    </NavLink>
  );
};

const SideBar = ({ links, navState, navStateToggleHandler: handleNavStateToggle }) => {
  const isMobile = useDimensions()?.width < 768;

  return (
    <FlexCol
      as="aside"
      className={`${navState === "open" && "animate-[slideRight_.3s_ease-out_forwards] shadow-[1px_0_10px_2000px_rgba(13,11,14,.2)] md:shadow-none"} top-0 fixed -left-[120%] z-20 h-screen md:h-fit overflow-y-scroll md:overflow-visible  gap-12 bg-white  px-7 pb-20 pt-4 transition-all md:relative  md:left-auto md:border-r-[1px]  md:border-r-gray-300   `}>
      <div
        className={`absolute left-full top-[14%] hidden -translate-x-1/2 rounded-full bg-gray-100 p-2 transition-all  md:block ${navState === "open" ? "rotate-180" : "rotate-0"}`}
        onClick={handleNavStateToggle}>
        <FaAngleRight />
      </div>

      <div className={`${isMobile ? "flex items-center gap-4 justify-between self-stretch" : "self-center"}`}>
        <Link to="/">
          <Logo type={isMobile || navState === "open" ? "long" : "short"} size={isMobile ? 2.75 : 2.2} />
        </Link>
        {isMobile && <IoClose className="text-2xl text-gray-800" onClick={handleNavStateToggle} />}
      </div>

      <FlexCol className="gap-10 self-start">
        {links.map((link) =>
          link.subLinks ? (
            <LinkElementWithChild
              key={link.title}
              {...link}
              navState={navState}
              onClickHandler={handleNavStateToggle}
            />
          ) : (
            <LinkElement key={link.link} {...link} navState={navState} onClickHandler={handleNavStateToggle} />
          )
        )}
      </FlexCol>
    </FlexCol>
  );
};

export default SideBar;
