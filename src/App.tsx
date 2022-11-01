import "./assets/styles/custom.scss";
import "./App.css";
import Navbar from "components/Navbar";
import Home from "page/Home";
import Catalogo from "page/Catalogo";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Catalogo />
    </>
  );
}

export default App;
