import Login from "./Compenent/Login/Login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedComponent from "./Compenent/ProtectedComponent/ProtectedComponent";
import Dashboard from "./Compenent/Dashboard/Dashboard";
import Rogister from "./Compenent/Register/Rogister";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Home/Home";
import ModalProvider from "./Context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Rogister />} />
        <Route
          path="/Dashboard/"
          element={
            <ProtectedComponent>
              <Dashboard />
            </ProtectedComponent>
          }
        >
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </ModalProvider>
  );
}

export default App;
