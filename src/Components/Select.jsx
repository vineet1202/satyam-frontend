import { forwardRef } from "react";
// options - {[label:'Admin',value:'satyam-admin']}

import { FlexCol } from "../Elements/Flex";

const Select = forwardRef(function ({ options, label, id, defaultValue, onChangeHandler = () => {} }, ref) {
  return (
    <FlexCol className="gap-2 text-[#555555]">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        onChange={onChangeHandler}
        ref={ref}
        className=" bg-transparent w-full border-[1.5px] text-black rounded-xl pl-2 py-3  border-gray-300 focus:outline-none"
        defaultValue={defaultValue}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FlexCol>
  );
});

export default Select;
