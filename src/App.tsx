import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;