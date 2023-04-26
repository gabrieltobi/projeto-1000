import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./routes";

import "./styles/index.css";

export const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
