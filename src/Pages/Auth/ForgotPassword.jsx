// Third party modules
import { useState } from "react";
import { CenterAbsolute } from "../../Elements/Center";
import { useReducer } from "react";
import {
  emailValidator,
  otpValidator,
  passwordValidator,
} from "../../validators/utils";
import zodErrorThrow from "../../Functions/zodErrorThrow";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "email":
      const email = emailValidator.safeParse(action.payload.email);
      if (!zodErrorThrow(email.error))
        return { ...state, email: action.payload.email };
      break;
    case "otp":
      const otp = otpValidator.safeParse(action.payload.otp);
      if (zodErrorThrow(otp.error))
        return { ...state, otp: action.payload.otp };
      break;
    case "password":
      const password = passwordValidator.safeParse(action.payload.passsword);
      const confirmPassword = action.payload.confirmPassword;
      if (!zodErrorThrow(password.error) && password === confirmPassword)
        return { ...state, password: action.payload.passsword };
  }

  return state;
};

const ForgotPassword = () => {
  // ["email", "otp", "password", "final"];
  const [status, setStatus] = useState("email");
  const [data, dispatchData] = useReducer(dataReducer, {
    email: "",
    otp: "",
    password: "",
  });
  return (
    <CenterAbsolute as="main" className="min-h-screen">
      {status === "email" && <form></form>}
      {status === "otp" && <></>}
      {status === "password" && <></>}
      {status === "final" && <></>}
    </CenterAbsolute>
  );
};

export default ForgotPassword;
