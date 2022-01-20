import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";

//Testing pages
import {Signup2} from "./pages/register/Signup2";
import {Login2} from "./pages/login/Login2";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Context } from "./context/Context";

axios.defaults.baseURL = "https://suiit-social-app.herokuapp.com/api";
axios.defaults.params = {};



function App() {
  const {user} = useContext(Context);
  return (
    <div>
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/register"
            element={user ? <Home /> : <Signup2 />}
          />
          <Route exact path="/login" element={user ? <Home /> : <Login2 />} />
          <Route
            exact
            path="/settings"
            element={user ? <Settings /> : <Signup2 />}
          />
          <Route
            exact
            path="/write"
            element={user ? <Write /> : <Signup2 />}
          />
          <Route exact path="/post/:id" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
