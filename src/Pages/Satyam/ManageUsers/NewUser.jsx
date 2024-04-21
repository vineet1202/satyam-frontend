// Third party
import { useRef } from "react";
import { IoClose } from "react-icons/io5";

// User
import Input from "../../../Components/Input";
import Select from "../../../Components/Select";
import { Flex } from "../../../Elements/Flex";

const roleOptions = [
  { label: "Select a role", value: "*" },
  { label: "Admin", value: "satyam-admin" },
  { label: "Chief Editor", value: "satyam-chief-editor" },
  { label: "Member", value: "satyam-member" },
];

const NewUser = ({ hideModalHandler }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();

  return (
    <div className="px-8 py-4">
      <Flex className="items-start gap-4 justify-between">
        <div>
          <h1>Add new user</h1>
          <p></p>
        </div>
        <IoClose className="text-2xl" />
      </Flex>
      <form>
        <Input
          inputOptions={{
            type: "text",
            placeholder: "Sahil aggarwal",
            required: true,
            ref: nameRef,
          }}
          label="Name"
          error_message="Please provide the name."
        />
        <Input
          inputOptions={{
            type: "email",
            placeholder: "sahilaggarwal2004@gmail.com",
            required: true,
            ref: emailRef,
          }}
          label="Email"
          error_message="Please provide a valid email address."
        />

        <Select options={roleOptions} ref={roleRef} />
      </form>
    </div>
  );
};

export default NewUser;
