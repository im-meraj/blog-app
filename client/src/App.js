import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";
axios.defaults.params = {};



function App() {
  const user = true;
  return (
    <div>
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/register"
            element={user ? <Home /> : <Register />}
          />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route
            exact
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route
            exact
            path="/write"
            element={user ? <Write /> : <Register />}
          />
          <Route exact path="/post/:id" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
