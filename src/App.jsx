import Aboutus from "./Components/Aboutus.jsx";
import Counters from "./Components/Counters.jsx";
import CustomSlider from "./Components/CustomSlider.jsx";
import FAQSection from "./Components/FAQSection.jsx";
import Latestnews from "./Components/Latestnews.jsx";
import Features from "./Components/Features.jsx";
import Hero from "./Components/Hero.jsx";
import PricingComponent from "./Components/PricingComponent.jsx";
import SaloonVideo from "./Components/SaloonVideo.jsx";
import Screens from "./Components/Screens.jsx";
import Services from "./Components/Services.jsx";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Footer.jsx";
import './index.css';
import ScrollToTopButton from "./Components/ScrollToTopButton.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route
          path="/"
          element={
            <div>
              <Hero />
              <Counters />
              <Aboutus />
              <Features />
              <Services />
              <Screens />
              <CustomSlider />
              <SaloonVideo />
              <FAQSection />
              <PricingComponent />
              <Latestnews />
            </div>
          }
        />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
