import { Flex } from "../../Elements/Flex";
import Search from "./../../assets/img/icons/search.svg";

const SearchBar = () => {
  return (
    <Flex className="w-1/2 items-center gap-4 rounded-3xl bg-[#f5f5f5] py-3 pl-6 pr-4">
      <input
        className="w-full bg-transparent text-lg tracking-wider text-darkgrey placeholder:text-base placeholder:tracking-wider focus:outline-none"
        type="text"
        placeholder="Search by title,author or keyword"
      ></input>
      <img src={Search} alt="Search" className="aspect-auto w-5" />
    </Flex>
  );
};

export default SearchBar;
