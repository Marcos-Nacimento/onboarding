import React from "react";
import Routes from "./routes";
import UserProvider from "./contexts/user";

import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;