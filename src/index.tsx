import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import store from "./app/store";
import GlobalStyles from "./styles";
import theme from "./theme";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </ThemeProvider>
);
