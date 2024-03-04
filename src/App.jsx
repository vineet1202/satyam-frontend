import SideNavBar from "./Components/SideNavBar";
import Header from "./Components/Header";
import Landing from "./Pages/Landing/Landing";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
