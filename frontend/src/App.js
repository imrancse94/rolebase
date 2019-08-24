import React from "react";
//import "./css/tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import GuestRoute from "./routes/GuestRoute";
import AuthRoute from "./routes/AuthRoute";
import routes from "./routes";
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

function App() {
  return (
    <Router>
        <React.Suspense fallback={loading()}>
          {routes.map((route, i) => {
            if (route.auth) {
              return <AuthRoute key={i} {...route} />;
            } else {
              return <GuestRoute key={i} {...route} />;
            }
          })}
        </React.Suspense>
      </Router>
  );
}

export default App;
