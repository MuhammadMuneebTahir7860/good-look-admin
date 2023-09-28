import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import SupplierReducer from "./reducers/SupplierReducer";
import ClientReducer from "./reducers/ClientReducer";
import ApplySupplierReducer from "./reducers/ApplySupplierReducer";
import AuditLogsReducer from "./reducers/AuditLogsReducer";
import ProductReducer from "./reducers/ProductReducer";
import OrderReducer from "./reducers/OrderReducer";
import BlogReducer from "./reducers/BlogReducer";
import ServiceReducer from "./reducers/ServiceReducer";
const rootReducer = combineReducers({
  AuthReducer,
  BlogReducer,
  ServiceReducer,
  SupplierReducer,
  ClientReducer,
  AuditLogsReducer,
  ApplySupplierReducer,
  ProductReducer,
  OrderReducer,
});
export default rootReducer;
