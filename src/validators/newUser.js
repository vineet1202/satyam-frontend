import { z } from "zod";
import { emailValidator, nameValidator } from "./utils";

const newUserValidator = z.object({
  name: nameValidator,
  email: emailValidator,
  type: z.enum(["satyam-member", "satyam-chief-editor", "satyam-admin"]),
});

export default newUserValidator;
