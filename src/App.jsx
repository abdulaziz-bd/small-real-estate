import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import CTA from "./components/cta/CTA";
import FAQ from "./components/faq/FAQ";
import Features from "./components/feature/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Properties from "./components/properties/Properties";
import Team from "./components/team/Team";

function App() {
  return (
    <>
      {/* === Navbar Section Start === */}
      <Navbar />
      {/* === Navbar Section End === */}
      {/* ====== Hero Section Start */}
      <Hero />
      {/* ====== Hero Section End */}
      {/* ====== Features Section Start */}
      <Features />
      {/* ====== Features Section End */}

      {/* ====== Properties Section Start */}
      <Properties />
      {/* ====== Properties Section End */}
      {/* ====== About Section Start */}
      <About />
      {/* ====== About Section End */}
      {/* ====== CTA Section Start */}
      <CTA />
      {/* ====== CTA Section End */}
      {/* ====== FAQ Section Start */}
      <FAQ />
      {/* ====== FAQ Section End */}
      {/* ====== Team Section Start */}
      <Team />
      {/* ====== Team Section End */}
      {/* ====== Contact Start ====== */}
      <Contact />
      {/* ====== Contact End ====== */}
      {/* ====== Footer Section Start */}
      <Footer />
      {/* ====== Footer Section End */}
    </>
  );
}

export default App;
