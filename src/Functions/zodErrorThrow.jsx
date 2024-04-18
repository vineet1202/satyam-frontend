import { toast } from "react-toastify";

const zodErrorThrow = (payload) => {
  if (payload.error) {
    Object.values(payload.error)[0].map((err) => toast.error(err.message));
    return true;
  }
  return false;
};

export default zodErrorThrow;
