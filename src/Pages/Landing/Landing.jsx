import Main from "./Main";
import { Btn, BtnBlack } from "../../Elements/Button";
import Grid from "./Grid";
import PublicationProcess from "./PublicationProcess";

const Landing = () => {
  return (
    <>
      <div className="relative mb-20">
        <Grid />
        <div className="flex justify-between px-12 py-4 ">
          <img src="/logo.png" alt="Satyam" className="aspect-auto w-32" />
          <div className="flex gap-4">
            <Btn className="border-[1px] border-blue">Sign In</Btn>
            <BtnBlack>Sign Up</BtnBlack>
          </div>
        </div>
        <Main />
      </div>

      <PublicationProcess />
    </>
  );
};

export default Landing;
