// Third party
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";

// User
import { Flex } from "../../Elements/Flex";
import ProfileImage from "../../Components/ProfileImage";

const Searchbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <Flex className="flex-1 items-center gap-3 pl-3 pr-2 xsm:gap-5 xsm:pl-5 sm:gap-6  md:pl-8 ">
      <Flex className=" items-center gap-2 xsm:gap-3 sm:gap-4">
        <FiSearch className="text-xl text-[#424242]  xsm:text-2xl sm:text-[1.6rem]" />
        <input
          type="text"
          placeholder="Find anything here"
          className="max-w-40 bg-transparent text-lg placeholder:text-base placeholder:text-[#a4a3ba]  focus:outline-none xsm:placeholder:text-lg"
        />
      </Flex>

      <div className="relative ml-auto inline-block">
        <FaRegBell className="text-2xl" />
        <div className="absolute left-full top-0 -translate-x-1/2 rounded-full bg-red-500 p-1" />
      </div>

      <div className="h-12 w-12">
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="aspect-square w-full rounded-full object-cover object-center"
          />
        ) : (
          <ProfileImage name={user.name} fontSize={"text-base"} />
        )}
      </div>
    </Flex>
  );
};

export default Searchbar;
