// Third party modules
import PropTypes from "prop-types";

// text-[6rem] text-[4rem] text-[3rem] text-[2.75rem] text-[2.5rem] text-[4.5rem] text-[5rem]
const Logo = ({ size = 3, type = "long", className }) => {
  return (
    <h1
      className={` text-[${size}rem] font-extrabold tracking-wide text-[#333] ${className}`}
    >
      <span className=" xms:text-[110%] text-[80%] text-blue sm:text-[120%]">
        S
      </span>
      {type && (
        <span className="text-[70%] xsm:text-[90%] sm:text-[100%]">atyam</span>
      )}
    </h1>
  );
};

Logo.propTypes = {
  type: PropTypes.oneOf(["short", "long"]),
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Logo;
