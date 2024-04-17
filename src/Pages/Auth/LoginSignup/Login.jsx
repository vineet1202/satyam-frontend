import { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";

import { FlexCol } from "../../../Elements/Flex";
import InputElement from "./Components/InputElement";
import Header from "./Components/Header";
import Button from "./Components/Button";
import { loginValidator } from "../../../validators/auth";
import { update } from "../../../store/userslice";
import { setItem } from "../../../Functions/storage";

const Login = () => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const mutation = useMutation({ mutationFn: (promise) => promise });

  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const payload = loginValidator.safeParse({ email, password });

    if (payload.error) {
      return Object.values(payload.error)[0].map((err) =>
        toast.error(err.message),
      );
    }

    const query = axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      payload.data,
      {
        headers: {
          dimensions: window.screen.width + window.screen.height,
        },
      },
    );

    toast.promise(query, {
      pending: "Logging in",
      success: "Logged in",
      error: "Uhhh!! Something went wrong",
    });

    mutation.mutate(query);
  };

  if (mutation.isSuccess) {
    const data = mutation.data.data;
    setItem("l_id", data.token);
    setItem("current_role", data.type);

    const userData = {
      name: data.name,
      email: data.email,
      default_role: data.type,
      image: data.image,
    };

    setItem("data", JSON.stringify(userData));
    dispatch(
      update({ token: data.token, ...userData, current_role: data.type }),
    );

    mutation.reset();
  }

  return (
    <FlexCol className=" transition-all">
      <Header
        heading="Login"
        message="Create a new account"
        route="/auth/signup"
        routeTo="Sign up"
      />
      <FlexCol as="form" onSubmit={loginHandler}>
        <FlexCol className="mb-8 gap-6 transition-all md:mb-4">
          <InputElement
            inputOptions={{
              type: "email",
              placeholder: "sahilaggarwal2004@gmail.com",
              required: true,
              ref: emailRef,
            }}
            label="Email"
            error_message="Please provide a valid email address."
          />
          <InputElement
            inputOptions={{
              type: "password",
              placeholder: "••••••••",
              minLength: 8,
              required: true,
              ref: passwordRef,
            }}
            label="Password"
            error_message="Password must be atleast 8 char long"
          />
        </FlexCol>
        <Link
          to="./../forgotpassword"
          className="mb-4 self-end text-lg text-blue md:text-base"
        >
          Forgot Password ?
        </Link>
        <Button>Login</Button>
      </FlexCol>
    </FlexCol>
  );
};

export default Login;
