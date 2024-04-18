import { z } from "zod";

const required_error_constructor = (field) =>
  `Missing required field : '${field}'`;

const min_length_error_constructor = (field, length) =>
  `${field} is too short . ${field} should be atleast ${length} chars long`;

export const emailValidator = z
  .string({ required_error: required_error_constructor("email") })
  .trim()
  .toLowerCase()
  .email("Invalid email address. Please re-enter.");

export const nameValidator = z
  .string({
    required_error: required_error_constructor("email"),
  })
  .trim()
  .min(1, min_length_error_constructor("Name", 1));

export const passwordValidator = z
  .string({ required_error: required_error_constructor("password") })
  .min(8, min_length_error_constructor("Password", 8));

export const otpValidator = z
  .string({
    required_error: required_error_constructor("otp"),
  })
  .trim()
  .length(6, "Invalid otp. Please re-enter.");