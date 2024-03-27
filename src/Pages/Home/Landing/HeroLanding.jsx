// Third party
import { Link } from "react-router-dom";

// User
import RightArrow from "./../../../assets/img/icons/chevron-right.svg";
import useDimensions from "../../../Hooks/useDimensions";
import { CenterCol } from "../../../Elements/Center";
import { BtnBlack } from "../../../Elements/Button";

const ouputlabelHandler = (dimensions, label) => {
  const max = Math.floor(dimensions.width / 45);
  return `${label.slice(0, max)}${label.length > max ? "...." : ""}`;
};

const Main = () => {
  const dimensions = useDimensions();
  const label = "Satyam vol.11 (2022-23)";
  const outputLabel = ouputlabelHandler(dimensions, label);
  const link = "http://localhost:5173";

  return (
    <CenterCol as="main">
      <Link
        to={link}
        className="mb-12 flex items-center gap-4 rounded-3xl bg-white py-[.4rem] pl-2 pr-4 shadow-[0_0_10px_1px_rgba(0,0,0,.2)]"
      >
        <button className="rounded-[2rem] bg-blue px-4 py-1  text-white">
          New
        </button>
        <span className="bold text-sm font-medium" title={label}>
          {outputLabel}
        </span>
        <img src={RightArrow} className="aspect-auto w-5" />
      </Link>

      <h1 className="mb-8 text-6xl leading-10">
        <span className="font-semibold">MSIT</span> Journal of Research
      </h1>
      <h2 className="mb-8 text-5xl font-bold leading-10 tracking-wider text-blue">
        SATYAM
      </h2>
      <p className="mb-8 w-1/2 text-center leading-relaxed text-[#8A8A8A]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
      </p>
      <BtnBlack className="mb-12 text-lg">Submission Button</BtnBlack>
    </CenterCol>
  );
};

export default Main;
