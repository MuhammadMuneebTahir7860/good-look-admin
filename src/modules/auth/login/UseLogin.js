import { useState } from "react";
import Toast from "../../../commonComponents/toast/Toast";
import { useDispatch } from "react-redux";
import { doLogin } from "../../../redux/actions/AuthActions";
import { doAddAdmin } from "../../../redux/actions/AdminActions";
export default function UseLogin() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    emailTyping: false,
    passwordTyping: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const emailTyping = () => {
    setValues({ ...values, emailTyping: true });
  };
  const emaiTypingRemove = () => {
    setValues({ ...values, emailTyping: false });
  };
  const passwordTyping = () => {
    setValues({ ...values, passwordTyping: true });
  };
  const passwordTypingRemove = () => {
    setValues({ ...values, passwordTyping: false });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = async () => {
    dispatch(doLogin(email, values.password, setLoading, Toast));
  };

  return [
    {
      loading,
      values,
      handleChange,
      handleClickShowPassword,
      email,
      setEmail,
      loginHandler,
      emailTyping,
      emaiTypingRemove,
      passwordTyping,
      passwordTypingRemove,
      showPassword,
    },
  ];
}
