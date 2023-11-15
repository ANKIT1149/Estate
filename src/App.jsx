import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { About, Contact, Home, Login, Product, Services } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Router>
        <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
