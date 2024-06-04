import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { store } from "./store";
// import { Provider } from "react-redux";
import { UserProvider } from "./context/userContext.jsx";
import { SocketProvider } from "./context/socketContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <SocketProvider>
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </BrowserRouter>
      </SocketProvider>
    </UserProvider>
  </React.StrictMode>
);
