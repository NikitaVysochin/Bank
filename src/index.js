import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./feature/store";
import { Provider } from "react-redux";
import { darkSber } from "@sberdevices/plasma-tokens/themes";
import { sberBox } from "@sberdevices/plasma-tokens/typo";
import { gradient } from "@sberdevices/plasma-tokens";
import styled from "styled-components";

const store = setupStore();

const All = styled.div`
  width: 100%;
  height: 100vh;
  ${sberBox[":root"]}
  ${darkSber[":root"]}
  border-radius: 7px;
  background-image: ${gradient};
  font-size: 1.1rem;
`;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <All>
        <App />
      </All>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
