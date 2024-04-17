// Third party imports
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useSelector } from "react-redux";

// User imports
import { BtnBlack, Btn } from "../../Elements/Button";
import { Flex } from "../../Elements/Flex";
import Logo from "../../Components/Logo";
import dummyUser from "./../../assets/img/dummy-user.png";

// const Search = () => {
//   const [inputVisibility, setInputVisibility] = useState(false);

//   const handleInputVisibility = () =>
//     setInputVisibility((prevVisibility) => !prevVisibility);

//   return (
//     <Flex
//       className={`items-center gap-4 overflow-hidden rounded-xl border-[1px]  bg-white py-3 pl-8 pr-4 ${inputVisibility ? "border-grey has-[:focus]:border-blue" : "border-transparent"}`}
//     >
//       {inputVisibility && (
//         <input
//           className="w-[22rem] bg-transparent placeholder:tracking-wider placeholder:text-gray-600 focus:outline-none"
//           type="text"
//           placeholder="Search with title, author or keyword"
//         />
//       )}
//       <button onClick={handleInputVisibility}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           stroke={inputVisibility ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.9)"}
//           fill="none"
//         >
//           <circle cx="10" cy="10" r="7" />
//           <line x1="21" y1="21" x2="15" y2="15" />
//         </svg>
//       </button>
//     </Flex>
//   );
// };

const Header = () => {
  const user = useSelector((state) => state.user);


  return (
    <Flex className="mb-8 items-center justify-between gap-6 px-3 pt-4 xsm:px-4 sm:px-8 md:justify-normal md:px-12">
      <HiOutlineMenuAlt2 className="text-3xl xsm:text-4xl   sm:text-5xl md:hidden" />

      <Flex className="items-center gap-2 xsm:gap-3 sm:gap-4">
        <img
          src="./msit.png"
          alt="MSIT"
          className="aspect-auto w-14 xsm:w-16 sm:w-20 md:w-[5.5rem] "
        />
        <Logo type="long" size={2.5} />
      </Flex>

      <div className="ml-auto hidden text-lg md:block">
        <strong> ISSN: </strong> 2319-7897&nbsp;(Print)
      </div>

      {JSON.stringify(user) === "{}" ? (
        <BtnBlack as={Link} to="/auth/login">
          Sign In
        </BtnBlack>
      ) : (
        <img
          src={user.image ? user.image : dummyUser}
          alt={user.name}
          className="aspect-square w-14 rounded-full object-cover object-center"
        />
      )}
    </Flex>
  );
};

export default Header;
