import styled from "styled-components";
import { FaCircleCheck } from "react-icons/fa6";
import { BiSolidErrorCircle } from "react-icons/bi";
import PropTypes from "prop-types";

const BorderElement = styled.div.attrs({
  className:
    "absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4",
})``;

const StatusIcons = ({ className, status }) => {
  return (
    <div className={`relative ${className}`}>
      {status === "pending" && (
        <>
          <BorderElement
            className=" animate-[spinCustom_1.5s_infinite_forwards_ease-in-out]  border-yellow-400 "
            style={{
              clipPath:
                "polygon(0 0,100% 0,100% 100%,50% 100%,50% 50%,0 50%,0 0)",
            }}
          />
          <FaCircleCheck className="text-6xl text-yellow-300" />
        </>
      )}

      {status === "partial-success" && (
        <>
          <BorderElement className="border-orange-600"></BorderElement>
          <FaCircleCheck className="animate-[scaleUp_.5s_linear] text-6xl text-orange-700" />
        </>
      )}

      {status === "error" && (
        <>
          <BorderElement className="border-red-500" />
          <BiSolidErrorCircle className="animate-[scaleUp_.5s_linear] text-6xl  text-red-600" />
        </>
      )}

      {status === "success" && (
        <>
          <BorderElement className="border-green-400"></BorderElement>
          <FaCircleCheck className="animate-[scaleUp_.5s_linear] text-6xl text-green-500" />
        </>
      )}
    </div>
  );
};

BorderElement.propTypes = {
  status: PropTypes.oneOf(["success", "pending", "error", "partial-success"]),
  className: PropTypes.string,
};

export default StatusIcons;
