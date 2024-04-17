// Third party
import { lazy, useEffect } from "react";
import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

// User Modules
const LoginSignup = lazy(() => import("./LoginSignup/LoginSignup"));
const Login = lazy(() => import("./LoginSignup/Login"));
const Signup = lazy(() => import("./LoginSignup/Signup"));
import getRoute from "../../Functions/getRoute";

const Auth = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");

  useEffect(() => {
    if (user.token) {
      if (redirect) navigate(redirect);
      else navigate(getRoute(user.current_role));
    }
  }, [user]);

  return (
    <Routes>
      <Route element={<LoginSignup />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default Auth;
