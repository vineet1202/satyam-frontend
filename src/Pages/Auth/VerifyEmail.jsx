// User Modules
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { FaCircleCheck } from "react-icons/fa6";
import { BiSolidErrorCircle } from "react-icons/bi";

// Third party modules
import { FlexCol } from "../../Elements/Flex";
import Logo from "./../../Components/Logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BorderElement = styled.div.attrs({
  className:
    "absolute left-1/2 top-1/2 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4",
})``;

const VerifyEmail = () => {
  const navigate = useNavigate();

  // Getting the token out of url
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("pending");
  const [retries, setRetries] = useState(1);
  const [redirect, setRedirect] = useState(10);
  const [message, setMessage] = useState(
    "We're just confirming your email address. This shouldn't take long.",
  );

  const verifyMutate = useMutation({
    mutationFn: () =>
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/auth/confirm`, {
        headers: { token },
      }),
    mutationKey: `verify/${token}`,
  });

  const refetchMutate = useMutation({
    mutationFn: () =>
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/confirm/reset`, {
        headers: { token },
      }),
    mutationKey: `refetch/${token}`,
  });

  useEffect(() => {
    verifyMutate.mutate();
  }, []);

  if (verifyMutate.isSuccess || verifyMutate.isError) verifyMutate.reset();

  // Success State
  if (verifyMutate.isSuccess) {
    setMessage("Account verification completed successfully.");
    setStatus("success");
    setInterval(() => setRedirect((prev) => prev - 1), 1000);
  }

  // Error State
  if (verifyMutate.isError) {
    const error = verifyMutate.error;
    let message =
      "We're experiencing technical difficulties. We apologize for the inconvenience. Please try again soon";
    let curStatus = "error";

    if (error?.response?.data) {
      const statusCode = verifyMutate.error.response.status;
      if (statusCode === 401) {
        message =
          "Oops! Looks like the verification link expired. Don't worry, we've sent a fresh one to your email.";
        refetchMutate.mutate();
        curStatus = "resent";
      } else if (statusCode === 404) {
        message =
          "The link seems to be broken. Could you please double-check it?";
      }
    } else {
      if (retries > 0) {
        verifyMutate.mutate();
        setRetries((prev) => prev - 1);
        curStatus = "pending";
      }
    }

    setMessage(message);
    setStatus(curStatus);
  }

  if (redirect === 1) navigate("/auth/login", { replace: true });

  return (
    <main className="relative flex min-h-screen flex-col pb-4 pt-14 ">
      <Logo type="long" size={4} className="self-center" />
      <FlexCol className="absolute left-1/2 top-1/2  w-full -translate-x-1/2 -translate-y-1/2  gap-16 ">
        <div className="relative self-center">
          {status === "pending" && (
            <>
              <BorderElement
                className=" animate-[spinCustom_1.5s_infinite_forwards_ease-in-out]  border-yellow-400 "
                style={{
                  clipPath:
                    "polygon(0 0,100% 0,100% 100%,50% 100%,50% 50%,0 50%,0 0)",
                }}
              />
              <FaCircleCheck className="text-6xl text-yellow-300" />
            </>
          )}

          {status === "resent" && (
            <>
              <BorderElement className="border-orange-600"></BorderElement>
              <FaCircleCheck className="animate-[scaleUp_.5s_linear] text-6xl text-orange-700" />
            </>
          )}

          {status === "error" && (
            <>
              <BorderElement className="border-red-500" />
              <BiSolidErrorCircle className="animate-[scaleUp_.5s_linear] text-6xl  text-red-600" />
            </>
          )}

          {status === "success" && (
            <>
              <BorderElement className="border-green-400"></BorderElement>
              <FaCircleCheck className="animate-[scaleUp_.5s_linear] text-6xl text-green-500" />
            </>
          )}
        </div>

        {/* TODO update the font related to it */}
        <div className="px-4 text-center xsm:px-6  sm:px-8 md:px-12">
          <h1 className="mb-4 font-mono text-base xsm:text-lg sm:text-xl">
            {message}
          </h1>
          {status === "success" && (
            <Link
              to="/auth/login"
              className=" text-sm tracking-wider text-blue xsm:text-base sm:text-lg "
            >
              Proceed to login (Redirecting in {redirect}..)
            </Link>
          )}
        </div>
      </FlexCol>
    </main>
  );
};

export default VerifyEmail;
