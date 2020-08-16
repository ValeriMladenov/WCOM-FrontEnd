import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router";
import { LOGIN_USER } from "utils/graphql/queries";
import { ReactComponent as WooCommerceLogo } from "assets/images/woo-logo.svg";
import Alert from "../../components/Alert";

const Login = () => {
  const history = useHistory();
  const [alert, setAlert] = useState("");
  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  const { handleSubmit, register, errors } = useForm();
  const onChangeLogin = e =>
    setLoginState({ ...loginState, [e.target.name]: e.target.value });

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: result => {
      localStorage.setItem("token", result.login.token);
      history.push("/orders");
    },
    onError: err => {
      const getAlert = () => <Alert type={false} message="" />;
      setAlert(getAlert);
    },
    variables: {
      username: loginState.username,
      password: loginState.password,
    },
  });
  return (
    <div className="flex items-center bg-gray-200 h-screen">
      <div className="w-full max-w-xs mx-auto">
        {alert}
        <WooCommerceLogo />
        <form
          onSubmit={handleSubmit(loginUser)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={`shadow appearance-none ${
                errors.username ? "border border-red-500" : ""
              } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="username"
              type="text"
              name="username"
              ref={register({
                required: "Required",
              })}
              onChange={onChangeLogin}
              placeholder="Username"
              autoCorrect="false"
            />

            <p className="text-red-500 text-xs italic">
              {errors.username && errors.username.message}
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none ${
                errors.password ? "border border-red-500" : ""
              } border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              name="password"
              ref={register({
                required: "Required",
              })}
              onChange={onChangeLogin}
              placeholder="Password"
            />

            <p className="text-red-500 text-xs italic">
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              href="forgot/"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
