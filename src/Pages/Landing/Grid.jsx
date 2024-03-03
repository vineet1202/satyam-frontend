import useClamp from "../../Hooks/useClamp";
import useDimensions from "../../Hooks/useDimensions";
import { CenterAbsolute } from "../../Elements/Center";

const Grid = () => {
  const dimensions = useDimensions();
  const boxSize = useClamp(30, dimensions.width * 0.2, 80);
  const cols = Array.from({
    length: Math.floor((dimensions.width * 10) / boxSize),
  });
  const rows = Array.from({
    length: Math.floor((dimensions.height * 10) / boxSize),
  });

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <div className="relative h-full overflow-hidden">
        <CenterAbsolute className="flex h-[1000vh] w-[1000vw] justify-between">
          {cols.map((col, index) => (
            <div
              className="h-full border-r-[1px]  border-black"
              key={index}
            ></div>
          ))}
        </CenterAbsolute>

        <CenterAbsolute className="flex h-[1000vh] w-[1000vw] flex-col justify-between">
          {rows.map((col, index) => (
            <div className="border-b-[1px] border-black" key={index}></div>
          ))}
        </CenterAbsolute>
        <CenterAbsolute
          className="h-full w-full "
          style={{
            background:
              "radial-gradient(rgba(255,255,255,.8),rgba(255,255,255,.85),rgba(255,255,255,.9),rgba(250,255,255,.8))",
          }}
        ></CenterAbsolute>
      </div>
    </div>
  );
};

export default Grid;
