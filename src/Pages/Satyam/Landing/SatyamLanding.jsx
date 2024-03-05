import useGreeting from "../../../Hooks/useGreeting";
import Stats from "./Stats";
import { FlexCol } from "../../../Elements/Flex";
import Chart from "./Chart";

const SatyamLanding = () => {
  const greeting = useGreeting();
  const name = "Shelly Chopra";

  return (
    <div className="grid grid-cols-[7fr_3fr] gap-8">
      <FlexCol className="gap-8 rounded-2xl bg-white px-4 py-4">
        <p className="text-xl tracking-wider">{`${greeting} , ${name.split(" ")[0]}`}</p>
        <Stats />
      </FlexCol>
      <div className="h-72">
        <Chart />
      </div>
    </div>
  );
};

export default SatyamLanding;
