import Landing from "./Pages/Home/Landing";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import Satyam from "./Pages/Satyam/Satyam";
import Auth from "./Pages/Auth/Auth";
import { Suspense } from "react";
import Upload from "./Pages/Author/Upload";
import Profile from "./Pages/Author/Profile";

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Page is loading</h1>}>
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/satyam/*" element={<Satyam />} />
          <Route path="/author/upload/*" element={<Upload />} />
          <Route path="/author/*" element={<Profile />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default App;
