import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Map from "./pages/Map";
import WhyChoose from "./pages/WhyChoose";
import WhatsAppBtn from "./pages/WhatsAppBtn";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="dark:bg-darkbg dark:text-white bg-blue-50">
      <Navbar />
      <Home />
      <About />
      <Services />
      <WhyChoose/>
      <WhatsAppBtn/>
      <Contact />
      <Map/>
      <Footer />
    </div>
  );
}