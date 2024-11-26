import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-primary md:bg-[url('/bg-img.png')] bg-no-repeat bg-contain">
      <Navbar />
      <Header />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
