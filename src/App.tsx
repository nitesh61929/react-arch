import React from "react";
import "./App.css";
import "fontsource-roboto";
import { RouterConfig } from "./navigation/RouterConfig";
import { BrowserRouter } from "react-router-dom";
import { GET_ALL_USERS } from "./services/ApiConstants";

function App() {
  console.log(GET_ALL_USERS());
  return (
    <div>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
