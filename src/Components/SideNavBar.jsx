import Cross from "./../assets/img/icons/cross.svg";
import { NavLink } from "react-router-dom";
import { colors } from "../constants";
// type links = [
//   {
//     url: string,
//     name: string,
//     icon: ImageObject,
//     alt: string,
//   }
// ];

const SideNavBar = ({ links }) => {
  return (
    <aside className="absolute inset-0 flex w-max flex-col  gap-14 px-10 py-7  xl:relative ">
      <div className="flex flex-col gap-6">
        <img src={Cross} className="aspect-auto w-4 self-end" />
        <img src="/logo.png" className=" aspect-auto w-32 " alt="Satyam"></img>
      </div>
      <div className="flex flex-col items-start gap-8 ">
        {links.map((link, index) => (
          <NavLink
            to={link.url}
            className="group flex items-center gap-4"
            key={index}
          >
            <img src={link.icon} alt={link.alt} className="h-6 w-6" />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default SideNavBar;
