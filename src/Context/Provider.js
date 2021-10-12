import React, { useReducer, useContext } from "react";
import { AuthinitialState, AuthrReducer } from "./reducers/auth.reducer";
import { UsersInitialState, usersrReducer } from "./reducers/users.reducer";

const GlobalStateContext = React.createContext();
const GlobalDispathcherContext = React.createContext();

// useAuthState
export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw Error("useGlobalState must be used with a GlobalProvider");
  }

  return context;
}
export function useGlobalDispatch() {
  const context = useContext(GlobalDispathcherContext);

  if (!context) {
    throw Error("useGlobalDispatch must be used with a useGlobalDispatch");
  }

  return context;
}

export function GlovalProvider({ children }) {
  const [authState, authDispatch] = useReducer(AuthrReducer, AuthinitialState);
  const [userState, userDispatch] = useReducer(
    usersrReducer,
    UsersInitialState
  );

  return (
    <GlobalStateContext.Provider value={{ userState, authState }}>
      <GlobalDispathcherContext.Provider value={{ authDispatch, userDispatch }}>
        {children}
      </GlobalDispathcherContext.Provider>
    </GlobalStateContext.Provider>
  );
}
