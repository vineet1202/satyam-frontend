import SideNavBar from "./Components/SideBar";
import Header from "./Components/Header";
import Landing from "./Pages/Home/Landing";

import { Routes, Route } from "react-router-dom";
import Satyam from "./Pages/Satyam/Satyam";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="/satyam/*" element={<Satyam />} />
      </Routes>
    </>
  );
};

export default App;
