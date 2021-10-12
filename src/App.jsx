import React from "react";
import Login from "./Pages/Login";
import AppRouter from "./router/AppRouter";
import { useGlobalState } from "../src/Context/Provider";

export default function App() {
  const globalState = useGlobalState();
  const { token } = globalState.authState;
  return <>{token ? <AppRouter /> : <Login />}</>;
}
