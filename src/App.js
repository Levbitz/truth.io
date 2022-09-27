import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import PortFolioPage from "./Pages/PortFolioPage/PortFolioPage";
import ScrollToTop from "./hooks/ScrollTop/ScrollTop";
import Ai from "./Pages/ServicePages/Ai/Ai";
import Android from "./Pages/ServicePages/Android/Android";
import DMarketing from "./Pages/ServicePages/DMarketing/DMarketing";
import Ecommerce from "./Pages/ServicePages/Ecomerce/Ecommerce";
import Ios from "./Pages/ServicePages/Ios/Ios";
import SoftWare from "./Pages/ServicePages/SoftWare/SoftWare";
import WebDev from "./Pages/ServicePages/WebDev/WebDev";
import Term from "./Pages/Terms/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import MobDevelopment from "./Pages/ServicePages/MobDevelopment/MobDevelopment";
import GetINTouch from "./Pages/GetInTouch/GetINTouch";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/portfolio" element={<PortFolioPage />} />
        <Route path="/artificial_intelligence" element={<Ai />} />
        <Route path="/android_app_development" element={<Android />} />
        <Route path="/digital_marketing" element={<DMarketing />} />
        <Route path="/ecommerce_development" element={<Ecommerce />} />
        <Route path="/ios_development" element={<Ios />} />
        <Route path="/custom_software_development" element={<SoftWare />} />
        <Route path="/web_development" element={<WebDev />} />
        <Route path="/terms" element={<Term />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/mob_development" element={<MobDevelopment />} />
        <Route path="/get_in_touch" element={<GetINTouch />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
