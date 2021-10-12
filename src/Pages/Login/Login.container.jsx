import React, { useState, useEffect, useLayoutEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useGlobalDispatch, useGlobalState } from "../../Context/Provider";
import { fetchToken, fetchCurrentUserInfo } from "../../apis/auth";
import {
  loginRequest,
  logginSuccess,
  loginError,
} from "../../Context/actions/auth.action";
import "./login.style.scss";
import CustomInput from "../../utils/input";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const { authState } = useGlobalState();
  const { authDispatch: dispatch } = useGlobalDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    fetchToken({
      username,
      password,
    }).then((response) => {
      const { success, data } = response.data;
      if (success) {
        setToken(data);
      } else {
        dispatch(loginError({ error: "error" }));
      }
    });
  };
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loginRequest());
      setToken(token);
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      fetchCurrentUserInfo().then((response) => {
        const { data: user, success } = response.data;
        if (success) {
          dispatch(
            logginSuccess({
              user,
              token,
            })
          );
        }
      });
    }
  }, [token, dispatch]);

  return (
    <>
      {authState.loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="login">
          <div className="container-login">
            <h1 className="text-center text-uppercase">login</h1>
            <Form onSubmit={handleLogin}>
              <CustomInput
                label="نام کاربری "
                placeholder=" نام کاربری خود را وارد کنید"
                initialValue={username}
                name="username"
                handleChangeInput={(e) => setUsername(e.target.value)}
              />
              <CustomInput
                label="رمز عبور "
                placeholder="محل سکونت خود را وارد کنید"
                initialValue={password}
                name="password"
                handleChangeInput={(e) => setPassword(e.target.value)}
                type="password"
              />
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ padding: "10px 30px" }}
                >
                  ارسال
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
