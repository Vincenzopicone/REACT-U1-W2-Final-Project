import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./component/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./component/Gallery";
import Favourites from "./component/Favourites";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
