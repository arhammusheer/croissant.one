import { createContext, useEffect, useState } from "react";
import { ANALYTICS_MEASUREMENT_ID } from "./pages/analytics";
import { Home } from "./pages/Home/Home";
import ReactGA from "react-ga4";
import { baseTheme, ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "./theme";
import { themeColor } from "./me";
import { ITheme } from "./me.interface";

// ColorScheme Context
export const ColorSchemeContext = createContext<{
  colorScheme: ITheme;
  setColorScheme: (colorScheme: ITheme) => void;
}>({
  colorScheme: themeColor,
  setColorScheme: () => {},
});

function App() {
  const [colorScheme, setColorScheme] = useState(themeColor);
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

  const nextTheme = extendTheme(theme, {
    colors: {
      brand: baseTheme.colors[colorScheme],
    },
  });

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      <ChakraProvider theme={nextTheme}>
        <Home />
      </ChakraProvider>
    </ColorSchemeContext.Provider>
  );
}

export default App;
