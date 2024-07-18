import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      variant={"ghost"}
      onClick={toggleColorMode}
      color={useColorModeValue("blue.500", "blue.200")}
      _hover={{
        bg: useColorModeValue("blue.100", "blue.900"),
      }}
      rounded={"full"}
    />
  );
};
