import "./App.css";
import Banner from "./modules/Banner/Banner";
import Navbar from "./modules/Navbar/Navbar";
import Services from "./modules/Services/Services";
import About from "./modules/About/About";
import Contact from "./modules/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
