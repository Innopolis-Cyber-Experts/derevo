import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/StartPage";
import { ConfigProvider } from "antd";
import "./App.css"
import Analyzing from "./pages/Analyzing";
import DisassemblyView from "./pages/DisassemblyView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/analyzing",
    element: <Analyzing />,
  },
  {
    path: "/disassembly",
    element: <DisassemblyView />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
