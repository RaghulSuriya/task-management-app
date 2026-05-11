import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useEffect } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  // TEST BACKEND CONNECTION
  useEffect(() => {

    fetch("http://localhost:8080/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend Connected ✅");
        console.log(data);
      })
      .catch((err) => {
        console.log("Backend Connection Failed ❌");
        console.log(err);
      });

  }, []);

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;