import { Navigate } from "react-router";
import GoodsDetail from "../page/GoodsDetail";

const PrivateRoute = ({ authenticate}) => {
  return authenticate === true ? <GoodsDetail/> : <Navigate to="/login" />;
};

export default PrivateRoute;