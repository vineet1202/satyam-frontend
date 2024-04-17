// Third party modules
import { useDispatch } from "react-redux";

// User Module
import { update } from "../store/userslice";
import { getItem } from "../Functions/storage";

const useinitAuth = () => {
  const dispatch = useDispatch();

  const data = JSON.parse(getItem("data") ?? "{}");
  const l_id = getItem("l_id");
  const current_role = getItem("current_role");

  dispatch(
    update({
      name: data.name,
      email: data.email,
      image: data.image,
      default_role: data.default_role,
      current_role: current_role,
      token: l_id,
    }),
  );
};

export default useinitAuth;
