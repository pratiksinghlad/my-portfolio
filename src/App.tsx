import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Expertise from "./components/Expertise";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.scss";

function App() {
  // const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  /* 
  // Restore if i18n needed
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  */

  return (
    <div className="main-container">
      <Navigation />
      <main>
        <Main />
        <Expertise />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
