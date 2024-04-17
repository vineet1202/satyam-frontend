import { z } from "zod";

export const emailValidator = z
  .string({ required_error: "Missing required field : email" })
  .trim()
  .toLowerCase()
  .email("Please enter a valid email address.");

export const nameValidator = z
  .string({
    required_error: "Missing required field : name",
  })
  .trim()
  .min(1, "Name is too short");

export const passwordValidator = z
  .string({ required_error: "Missing required field : password" })
  .min(8, "Password is too short. Minimum length is 8 characters.");
