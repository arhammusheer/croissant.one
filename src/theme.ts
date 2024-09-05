// theme.js

// 1. import `extendTheme` function
import { baseTheme, extendTheme } from "@chakra-ui/react";
import { themeColor } from "./me";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    brand: baseTheme.colors[themeColor],
  },
});

export default theme;
