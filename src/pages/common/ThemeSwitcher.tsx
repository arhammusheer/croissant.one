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
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import ReactGA from "react-ga4";
import { FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { ColorSchemeContext } from "../../App";
import { ITheme } from "../../me.interface";
import { enableMultiTheme, multiThemeOptions } from "../../me";

export const ThemeSwitcher = () => {
  const { setColorScheme, colorScheme } = useContext(ColorSchemeContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const { onOpen, onClose, isOpen } = useDisclosure();

  // Popover styles
  const popoverBg = useColorModeValue("white", "gray.800");
  const popoverBorder = useColorModeValue("brand.200", "gray.900");

  // Icon button
  const iconButtonBorderColor = useColorModeValue("brand.100", "brand.700");
  const iconButtonColor = useColorModeValue("brand.500", "brand.200");
  const iconButtonHoverBg = useColorModeValue("brand.50", "brand.800");
  const iconButtonHoverBorder = useColorModeValue("brand.200", "brand.700");

  // Disabled multiple themes
  if (!enableMultiTheme) {
    return (
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        variant={"ghost"}
        color={iconButtonColor}
        _hover={{
          bg: iconButtonHoverBg,
          border: "1px",
          borderColor: iconButtonHoverBorder,
        }}
        rounded={"full"}
        onClick={toggleColorMode}
      />
    );
  }

  // Multiple themes
  return (
    <Popover
      placement="bottom"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      offset={[0, 16]}
    >
      <PopoverTrigger>
        <motion.div
          whileHover={{ rotate: isOpen ? 0 : -22.5 }}
          whileTap={{ rotate: 90 }}
        >
          {isOpen ? (
            <IconButton
              aria-label="Close theme options"
              icon={<FaTimes />}
              variant={"ghost"}
              color={iconButtonColor}
              _hover={{
                bg: iconButtonHoverBg,
                border: "1px",
                borderColor: iconButtonHoverBorder,
              }}
              rounded={"full"}
              border={isOpen ? "1px" : "0"}
              borderColor={iconButtonBorderColor}
            />
          ) : (
            <IconButton
              aria-label="Toggle theme"
              icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
              variant={"ghost"}
              color={iconButtonColor}
              _hover={{
                bg: iconButtonHoverBg,
                border: "1px",
                borderColor: iconButtonHoverBorder,
              }}
              rounded={"full"}
            />
          )}
        </motion.div>
      </PopoverTrigger>
      <PopoverContent
        w={"auto"}
        rounded={"full"}
        bg={popoverBg}
        border={"1px"}
        borderColor={popoverBorder}
      >
        <PopoverBody py={3}>
          <Stack direction={"column"} spacing={1} align={"center"}>
            {multiThemeOptions.map((theme) => (
              <ThemeOption
                key={theme}
                color={theme}
                colorScheme={colorScheme}
                setColorScheme={setColorScheme}
              />
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const ThemeOption = ({
  color,
  colorScheme,
  setColorScheme,
}: {
  color: ITheme;
  colorScheme: ITheme;
  setColorScheme: (color: ITheme) => void;
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconButtonColor = useColorModeValue("brand.500", "brand.200");
  const iconButtonHoverBg = useColorModeValue("brand.100", "brand.900");

  const onClick = () => {
    if (color === colorScheme) {
      toggleColorMode();
    } else {
      setColorScheme(color);
    }
    trackClick(color);
  };

  if (color === colorScheme) {
    return (
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <IconButton
          aria-label="Toggle theme"
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          variant={"solid"}
          color={iconButtonColor}
          _hover={{
            bg: iconButtonHoverBg,
          }}
          onClick={onClick}
          rounded={"full"}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: colorMode === "light" ? 45 : -45 }}
      whileTap={{ scale: 0.9, rotate: colorMode === "light" ? -45 : 45 }}
    >
      <Tooltip label={color} aria-label={color} placement="left">
        <Flex
          onClick={onClick}
          cursor={"pointer"}
          rounded={"full"}
          p={1}
          bg={color === colorScheme ? `${color}.200` : "transparent"}
          _hover={{
            bg: colorMode === "light" ? `${color}.100` : `${color}.700`,
          }}
        >
          <Box
            bg={`${color}.200`}
            w={4}
            h={8}
            borderLeftRadius={"full"}
            borderRightRadius={"0"}
          />
          <Box
            bg={`${color}.700`}
            w={4}
            h={8}
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
