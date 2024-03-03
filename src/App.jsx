import SideNavBar from "./Components/SideNavBar";
import Header from "./Components/Header";
import Landing from "./Pages/Landing/Landing";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <SideNavBar
        links={[
          {
            url: "/api",
            name: "Track Submission",
            icon: Logo,
            alt: "logo",
          },
          {
            url: "/1",
            name: "Upload Journals",
            icon: Logo,
            alt: "logo",
          },
          {
            url: "/2",
            name: "Approved Journals",
            icon: Logo,
            alt: "logo",
          },
          {
            url: "/3",
            name: "Api",
            icon: Logo,
            alt: "logo",
          },
        ]}
      />
      <main className=""></main>
      <Header /> */}
      {/* <BtnPrimary>Login</BtnPrimary> */}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default App;
