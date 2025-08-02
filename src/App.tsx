import React, { useState, useEffect, Suspense, lazy, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Navigation, Footer } from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

// Lazy load components for better performance
const Main = lazy(() => import("./components/Main"));
const Timeline = lazy(() => import("./components/Timeline"));
const Expertise = lazy(() => import("./components/Expertise"));
const Contact = lazy(() => import("./components/Contact"));

// Loading fallback component
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
      fontSize: "18px",
    }}
  >
    <div>Loading...</div>
  </div>
);

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>Reload</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [mode, setMode] = useState<string>("dark");
  const { i18n } = useTranslation();

  const handleModeChange = useCallback(() => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ErrorBoundary>
      <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Suspense fallback={<LoadingSpinner />}>
            <Main />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Expertise />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Timeline />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </FadeIn>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
