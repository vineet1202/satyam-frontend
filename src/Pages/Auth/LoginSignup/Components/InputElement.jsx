import { FlexCol } from "../../../../Elements/Flex";

const InputElement = ({ label, error_message, ref, inputOptions }) => {
  return (
    <FlexCol className="gap-2">
      <label
        htmlFor={label.toLowerCase()}
        className="text-lg text-[#555555] transition-all md:text-base"
      >
        {label}
      </label>
      <input
        ref={ref}
        {...inputOptions}
        id={label.toLowerCase()}
        className={`peer mb-1 w-full rounded-xl  border-[1.5px] px-5 py-4 transition-all placeholder:text-[#aaaaaa] placeholder-shown:border-gray-300  invalid:border-red-400 placeholder-shown:invalid:border-gray-300 focus:outline-none focus:valid:border-blue focus:valid:shadow-[0_0_10px_1px_rgba(51,78,255,0.4)] focus:invalid:border-red-400  focus:invalid:shadow-[0_0_10px_1px_rgba(255,0,0,.3)] md:mb-0 md:py-[.7rem] ${inputOptions.type === "password" ? "tracking-widest" : ""}`}
      />
      <p className=" text-sm transition-all peer-placeholder-shown:hidden peer-valid:hidden peer-invalid:text-red-500">
        {error_message}
      </p>
    </FlexCol>
  );
};

export default InputElement;
