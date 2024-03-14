import { Flex } from "../../Elements/Flex";
import Search from "./../../assets/img/icons/search.svg";

const SearchBar = () => {
  return (
    <Flex className="w-1/2 max-w-[35rem] items-center gap-4 rounded-3xl bg-[#ebebeb] py-3 pl-6 pr-4">
      <input
        className="w-full bg-transparent text-lg tracking-wider placeholder:text-base placeholder:tracking-wider placeholder:text-darkgrey focus:outline-none"
        type="text"
        placeholder="Search by title,author or keyword"
      ></input>
      <img src={Search} alt="Search" className="aspect-auto w-6" />
    </Flex>
  );
};

export default SearchBar;
