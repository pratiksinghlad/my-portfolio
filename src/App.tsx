import { Suspense, lazy, useEffect } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
const Expertise = lazy(() => import("./components/Expertise"));
const Timeline = lazy(() => import("./components/Timeline"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
import Footer from "./components/Footer";
import "./index.scss";

function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="main-container">
      <Navigation />
      <main>
        <Main />
        <Suspense fallback={<div />}>
          <Expertise />
        </Suspense>
        <Suspense fallback={<div />}>
          <Timeline />
        </Suspense>
        <Suspense fallback={<div />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
