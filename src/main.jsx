import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TaskContextProvider } from "./contextfolder/context.jsx";
import "./estilos/index.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
