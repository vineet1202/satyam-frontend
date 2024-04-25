import { z } from "zod";
import { emailValidator, nameValidator } from "./utils";

const newUserValidator = z.object({
  name: nameValidator,
  email: emailValidator,
  role: z.enum(["satyam-member", "satyam-chief-editor", "satyam-admin"]),
});

export default newUserValidator;
