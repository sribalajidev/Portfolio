import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import SimpleText from "./components/SimpleText";
import ScrollText from "./components/ScrollText";
import StackCard from "./components/StackCard/StackCard";
import Footer from "./components/Footer/Footer";

// Importing Styles
import "./App.css";

function App() {
  const [showLoader, setShowLoader] = useState(false);
  const [loaderStart, setLoaderStart] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowLoader(true);
      sessionStorage.setItem("hasVisited", "true");

      requestAnimationFrame(() => {
        setLoaderStart(true);
      });
    }
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader
          start={loaderStart}
          onFinish={() => {
            setShowLoader(false);
          }}
        />
      ) : (
        <div className="app-content">
          <Navigation />
          <HeroBanner />
          <SimpleText />
          <ScrollText />
          <StackCard />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
