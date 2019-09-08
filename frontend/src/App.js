import React from "react";
//import "./css/tailwind.css";
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.scss'
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
              console.log('all route',route);
            if (route.auth) {
              return <AuthRoute key={i} path={route.path} component={route.component} />;
            } else {
              return <GuestRoute key={i} path={route.path} component={route.component} />;
            }
          })}

        </React.Suspense>
      </Router>
  );
}

export default App;
