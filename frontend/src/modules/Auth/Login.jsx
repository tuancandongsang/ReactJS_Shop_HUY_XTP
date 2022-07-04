import { unwrapResult } from "@reduxjs/toolkit";
import { message } from "antd";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm/index";
import { login } from "./userSlice";

Login.propTypes = {};

function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = async (val) => {
    try {
      const action = login(val);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      await history.replace("/");
      return message.success("Đăng nhập thành công!");
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  const handleClose = () => {
    history.replace("/");
  };
  return <LoginForm handleSubmit={handleSubmit} handleClose={handleClose} />;
}

export default Login;
