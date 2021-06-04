import "./App.css";
import AOS from "aos";
import Nav from "./components/Navigation";
import InfoHeader from "./components/InfoHeader";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
AOS.init();

function App() {
  return (
    <>
      <Nav />
      <InfoHeader />
      <Events />
      <Team />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
