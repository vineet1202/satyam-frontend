// Third party modules
import PropTypes from "prop-types";

// text-[6rem] text-[4rem] text-[3rem] text-[2.75rem] text-[2.5rem]
const Logo = ({ size = 3, type = "long" }) => {
  return (
    <h1
      className={`leading-3 text-[${size}rem] font-extrabold tracking-wide text-[#333] `}
    >
      <span className=" text-[70%] text-blue sm:text-[110%] md:text-[120%]">
        S
      </span>
      {type && (
        <span className="text-[60%] sm:text-[90%] md:text-[100%]">atyam</span>
      )}
    </h1>
  );
};

Logo.propTypes = {
  type: PropTypes.oneOf(["short", "long"]),
  size: PropTypes.number,
};

export default Logo;
