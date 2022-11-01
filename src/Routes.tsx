import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "page/Home";
import Catalogo from "page/Catalogo";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
