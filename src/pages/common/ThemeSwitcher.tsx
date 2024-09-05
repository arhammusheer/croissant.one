import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import ReactGA from "react-ga4";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const onClick = () => {
    toggleColorMode();
    trackClick(colorMode);
  }

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      variant={"ghost"}
      onClick={onClick}
      color={useColorModeValue("brand.500", "brand.200")}
      _hover={{
        bg: useColorModeValue("brand.100", "brand.900"),
      }}
      rounded={"full"}
    />
  );
};

// Analytics
const trackClick = (name: string) => {
  ReactGA.event({
    category: "ThemeSwitcher",
    action: "Clicked",
    label: name,
  });
}