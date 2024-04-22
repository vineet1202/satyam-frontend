import styled from "styled-components";

export const BtnBase = styled.button.attrs({
  className:
    "rounded-lg  px-4 xsm:px-5 sm:px-6 py-[.5rem] text-xs xsm:text-sm sm:text-base md:text-lg  transition-all",
})``;

export const Btn = styled(BtnBase).attrs({
  className:
    "bg-white shadow-[0px_0px_10px_0.5px]  shadow-grey hover:bg-gray-100",
})``;

export const BtnBlack = styled(BtnBase).attrs({
  className: "bg-black text-white hover:bg-gray-900",
})``;
