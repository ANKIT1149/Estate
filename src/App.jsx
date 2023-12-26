/* eslint-disable react-refresh/only-export-components */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  About,
  Admin,
  Contact,
  Home,
  Login,
  Product,
  Services,
  Signup,
} from "./pages";
import { Footer, Navbar } from "./components";
import ThemeProvider from "./context/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Order from "./pages/Order";
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="order"
            element={
              <ProtectedRoutesUser>
                <Order />
              </ProtectedRoutesUser>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoutesAdmin>
                <Admin />
              </ProtectedRoutesAdmin>
            }
          />
        </Routes>
        <Footer />
        <ToastContainer />

      </Router>
    </ThemeProvider>
  );
}

export default App;

export const ProtectedRoutesAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin?.user?.email === "ankitsrivastav38@gmail.com") {
    return children;
  } else {
    window.location.href = "login"
  }
};

export const ProtectedRoutesUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return children;
  } else {
    window.location.href = "login"
  }
};
