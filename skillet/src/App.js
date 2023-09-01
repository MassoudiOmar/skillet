import React, { createContext } from "react";
import "./App.css";
import Router from "./route/Router";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
export const RtlContext = createContext();

function App() {
  return (
    <Provider store={store}>
      <RtlContext.Provider>
        <div className="container-sm my-4">
          <Router />
        </div>{" "}
      </RtlContext.Provider>
    </Provider>
  );
}

export default App;
