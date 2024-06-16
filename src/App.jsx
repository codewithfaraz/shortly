import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ShortenForm from "./Components/ShortenForm";
import ShortenLinks from "./Components/ShortenLinks";
import Features from "./Components/Features";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShortenForm />
      <ShortenLinks
        l="https://www.frontendmentor.io"
        r="https://rel.ink/k4IKYK"
      />
      <ShortenLinks
        l="https://www.frontendmentor.io"
        r="https://rel.ink/k4IKYK"
      />
      <ShortenLinks
        l="https://www.frontendmentor.io"
        r="https://rel.ink/k4IKYK"
      />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
