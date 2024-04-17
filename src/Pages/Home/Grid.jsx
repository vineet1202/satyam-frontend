import useClamp from "../../Hooks/useClamp";
import useDimensions from "../../Hooks/useDimensions";
import { CenterAbsolute } from "../../Elements/Center";
import { Flex, FlexCol } from "../../Elements/Flex";

const GridLines = ({ lines, rotate = false }) => {
  return (
    <CenterAbsolute
      as={rotate ? FlexCol : Flex}
      className="h-[1000vh] w-[1000vw] justify-between "
    >
      {lines.map((_, index) => (
        <div
          className={`${rotate ? "border-b-[1px]" : "h-full border-r-[1px]"}  border-gray-500`}
          key={index}
        ></div>
      ))}
    </CenterAbsolute>
  );
};

const generateArray = (length) => Array.from({ length });

const Grid = () => {
  const dimensions = useDimensions();
  const boxSize = useClamp(30, dimensions.width * 0.2, 80);
  const cols = generateArray(Math.floor((dimensions.width * 10) / boxSize));
  const rows = generateArray(Math.floor((dimensions.height * 10) / boxSize));

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <div className="relative h-full overflow-hidden">
        <GridLines lines={cols} />
        <GridLines lines={rows} rotate={true} />

        <CenterAbsolute
          className="h-full w-full "
          style={{
            background:
              "radial-gradient(rgba(255,255,255,.7),rgba(255,255,255,.8),rgba(255,255,255,.9),rgba(255,255,255,.8),rgba(250,255,255,.7))",
          }}
        ></CenterAbsolute>
      </div>
    </div>
  );
};

export default Grid;
