import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Payment from "./Pages/Payment/Payment";
import Pricing from "./Components/Pricing/Pricing";
import { CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Calender from "./Pages/Calender/Calender";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import BackgroundAnimation from "./Components/BackgroundAnimation/BackgroundAnimation";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="payment" element={<Payment />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="event-date" element={<Calender />} />
          <Route path="photo-album" element={<BackgroundAnimation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
