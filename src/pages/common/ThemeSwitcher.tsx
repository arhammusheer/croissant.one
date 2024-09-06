import {
  Box,
  Flex,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import ReactGA from "react-ga4";
import { FaMoon, FaSun } from "react-icons/fa";
import { ColorSchemeContext } from "../../App";
import { ITheme } from "../../me.interface";

// Recommended: Don't exceed 6 themes, overflow is not handled
const themeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "cyan",
  "green",
];

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const popoverBg = useColorModeValue("white", "gray.800");
  const popoverBorder = useColorModeValue("brand.200", "gray.900");

  // Multiple themes
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          variant={"ghost"}
          color={useColorModeValue("brand.500", "brand.200")}
          _hover={{
            bg: useColorModeValue("brand.100", "brand.900"),
          }}
          rounded={"full"}
        />
      </PopoverTrigger>
      <PopoverContent
        w={"auto"}
        rounded={"full"}
        bg={popoverBg}
        border={"1px"}
        borderColor={popoverBorder}
      >
        <PopoverBody>
          <Stack direction={"row"} spacing={2}>
            {themeOptions.map((theme) => (
              <ThemeOption key={theme} color={theme} />
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const ThemeOption = ({ color }: { color: ITheme }) => {
  const { setColorScheme, colorScheme } = useContext(ColorSchemeContext);
  const { colorMode, toggleColorMode } = useColorMode();

  const onClick = () => {
    if (color === colorScheme) {
      toggleColorMode();
      console.log("toggleColorMode");
    }
    setColorScheme(color);
    trackClick(color);
  };

  if (color === colorScheme) {
    return (
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          variant={"ghost"}
          color={useColorModeValue("brand.500", "brand.200")}
          _hover={{
            bg: useColorModeValue("brand.100", "brand.900"),
          }}
          onClick={onClick}
          rounded={"full"}
        />
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Tooltip label={color} aria-label={color}>
        <Flex
          onClick={onClick}
          cursor={"pointer"}
          rounded={"full"}
          p={2}
          bg={color === colorScheme ? `${color}.200` : "transparent"}
        >
          <Box
            bg={`${color}.200`}
            w={3}
            h={6}
            borderLeftRadius={"full"}
            borderRightRadius={"0"}
          />
          <Box
            bg={`${color}.700`}
            w={3}
            h={6}
            borderRightRadius={"full"}
            borderLeftRadius={"0"}
          />
        </Flex>
      </Tooltip>
    </motion.div>
  );
};

// Analytics
const trackClick = (name: string) => {
  ReactGA.event({
    category: "ThemeSwitcher",
    action: "Clicked",
    label: name,
  });
};
