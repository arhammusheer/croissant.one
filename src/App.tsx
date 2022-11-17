import { useEffect } from "react";
import { ANALYTICS_MEASUREMENT_ID } from "./pages/analytics";
import { Home } from "./pages/Home/Home";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    // Console logs to people who are poking around
    console.log(
      "%cHi there! 👋",
      "font-size: 2rem; font-weight: bold; color: #ED8936;"
    );

    console.log(
      "%c I see you're poking around the console.",
      "font-size: 1.1rem; color: #FFF;"
    );

    console.log(
      "%cIf you're interested in the code for this site, you can find it here:",
      "font-size: 1.1rem; color: #FFF;"
    );

    console.log(
      "%chttps://github.com/arhammusheer/croissant.one",
      "font-size: 1.1rem; color: #4299E1;"
    );

    ReactGA.initialize(ANALYTICS_MEASUREMENT_ID);
    ReactGA.send("pageview");
  }, []);

  return <Home />;
}

export default App;
