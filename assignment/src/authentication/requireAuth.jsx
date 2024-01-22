import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/reducer";
export default function RequireAuth() {
  console.log("trigger");
  let auth = localStorage.getItem("Auth");
  let name = localStorage.getItem("user");
  const dispatch = useDispatch();
  let data = useSelector((state) => state.counter.name);
  if (!data && name) {
    dispatch(addData({ name: name, authentication: true }));
  } else {
    console.log("fail", data, name);
  }

  return <div>{auth ? <Outlet /> : <Navigate to="/signin" />}</div>;
}
