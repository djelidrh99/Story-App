import Login from "./Compenent/Login/Login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedComponent from "./Compenent/ProtectedComponent/ProtectedComponent";
import Dashboard from "./Compenent/Dashboard/Dashboard";
import Rogister from "./Compenent/Register/Rogister";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Home/Home";
import ModalProvider from "./Context/ModalContext";
import Create from "./Pages/Create/Create";
import Message from "./Pages/Message/Message";
import Explore from "./Pages/Explore/Explore";
import Reels from "./Pages/Reels/Reels";
import Notifications from "./Pages/Notifications/Notifications";

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
          <Route path="create" element={<Create />} />
          <Route path="messages" element={<Message />} />
          <Route path="explore" element={<Explore  />} />
          <Route path="reels" element={<Reels/>} />
          <Route path="notifications" element={< Notifications />} />


        </Route>
      </Routes>
    </ModalProvider>
  );
}

export default App;
