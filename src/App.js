import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.js";
import Scroll from "./components/Scroll Effect/Scroll.js";
import About from "./components/About Us/About.js";
import TwoColumn from "./components/twoColumn/twoColumn.js";
import Services from "./components/Services/Services.js";
import Faqs from "./components/Faqs/Faqs";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  let heroData = [
    { text1: "Innovative Software", text2: "that Powers Your Growth" },
    { text1: "Where Creativity", text2: "Meets Functionality" },
    { text1: "Give in toElevate Your Brand,", text2: "Amplify Your Impact" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Scroll />
      <About />
      <TwoColumn />
      <Services />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
