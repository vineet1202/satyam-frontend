import { useState } from "react";

import { Btn, BtnBlack } from "../../Elements/Button";
import { Flex } from "../../Elements/Flex";
import SearchIcon from "./../../assets/img/icons/search.svg";

const Search = () => {
  const [inputVisibility, setInputVisibility] = useState(false);

  const handleInputVisibility = () =>
    setInputVisibility((prevVisibility) => !prevVisibility);

  return (
    <Flex
      className={`items-center gap-4 overflow-hidden rounded-xl border-[1px]  bg-white py-3 pl-8 pr-4 ${inputVisibility ? "border-grey has-[:focus]:border-blue" : "border-transparent"}`}
    >
      {inputVisibility && (
        <input
          className="w-[22rem] bg-transparent placeholder:tracking-wider placeholder:text-gray-600 focus:outline-none"
          type="text"
          placeholder="Search with title, author or keyword"
        />
      )}
      <button onClick={handleInputVisibility}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke={inputVisibility ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.9)"}
          fill="none"
        >
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </Flex>
  );
};

const Header = () => {
  return (
    <div className="mb-8 flex items-center justify-between  px-12 pt-6">
      {/* <svg
        className="sm:hidden block"
        height="24"
        preserveAspectRatio="xMinYMin"
        viewBox="-5 -7 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m1 0h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2zm-7-4h12a1 1 0 0 1 0 2h-12a1 1 0 1 1 0-2z" />
      </svg> */}
      <img src="/logo.png" alt="Satyam" className="aspect-auto w-40" />
      <Flex className="items-center gap-6">
        <Search />
        <div className="grid grid-cols-2 gap-4 ">
          <Btn>Sign In</Btn>
          <BtnBlack>Sign Up</BtnBlack>
        </div>
      </Flex>
    </div>
  );
};

export default Header;
