import Login from "./Compenent/Login/Login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedComponent from "./Compenent/ProtectedComponent/ProtectedComponent";
import Dashboard from "./Compenent/Dashboard/Dashboard";
import Rogister from "./Compenent/Register/Rogister";
import Search from "./Pages/Search/Search";
import Home from "./Pages/Home/Home";
import ModalProvider from "./Context/ModalContext";
import StoryProvider from "./Context/StoryContext";
import Create from "./Pages/Create/Create";
import Message from "./Pages/Message/Message";

function App() {
  return (
    <StoryProvider>
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


        </Route>
      </Routes>
    </ModalProvider>
    </StoryProvider>
  );
}

export default App;
