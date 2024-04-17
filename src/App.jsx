// Third party modules
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// User Modules
import Landing from "./Pages/Home/Landing";
import Logo from "./Components/Logo";
const Satyam = lazy(() => import("./Pages/Satyam/Satyam"));
const Auth = lazy(() => import("./Pages/Auth/Auth"));
import { CenterAbsolute } from "./Elements/Center";
import useinitAuth from "./Hooks/useinitAuth";


const App = () => {
  useinitAuth();

  return (
    <>
      <Suspense
        fallback={
          <CenterAbsolute>
            <Logo type="long" size={4} />
          </CenterAbsolute>
        }
      >
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/satyam/*" element={<Satyam />} />
          <Route path="/reviewer" element={<Reviewer />} />
          <Route path="/reviewer/dashboard/:id" element={<Dashboard />} />
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
