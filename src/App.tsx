import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Menu } from "./components/NavBar/Menu";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import { Footer } from "./components";
import { footerSections } from "./components/Footer/constants";

function App() {
  return (
    <Router>
      <div className="app">

      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
      <Footer
        section={footerSections}
        description={"Todos los derechos Reservados. TiedaMuebles"}
      />
            </div>

    </Router>
  );
}

export default App;
