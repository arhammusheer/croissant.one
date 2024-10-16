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
import { FaMoon, FaPaintBrush, FaSun, FaTimes } from "react-icons/fa";
import { ColorSchemeContext } from "../../App";
import { enableMultiTheme, multiThemeOptions } from "../../me";
import { ITheme } from "../../me.interface";

export const ThemeSwitcher = () => {
  const { setColorScheme, colorScheme } = useContext(ColorSchemeContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const { onOpen, onClose, isOpen } = useDisclosure();

  // Popover styles
  const popoverBg = useColorModeValue("white", "brand.950");
  const popoverBorder = useColorModeValue("brand.200", "brand.800");

  // Icon button
  const iconButtonBorderColor = useColorModeValue("brand.100", "brand.700");
  const iconButtonColor = useColorModeValue("brand.500", "brand.200");
  const iconButtonHoverBg = useColorModeValue("brand.50", "brand.800");
  const iconButtonHoverBorder = useColorModeValue("brand.200", "brand.700");

  // Disabled multiple themes
  if (!enableMultiTheme) {
    return (
      <IconButton
        role="button"
        tabIndex={0}
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
          tabIndex={-1}
        >
          {isOpen ? (
            <IconButton
              role="button"
              tabIndex={0}
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
              role="button"
              tabIndex={0}
              aria-label="Toggle theme"
              icon={
                enableMultiTheme ? (
                  <FaPaintBrush />
                ) : colorMode === "light" ? (
                  <FaSun />
                ) : (
                  <FaMoon />
                )
              }
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
        shadow={"lg"}
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

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement | HTMLButtonElement>
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  if (color === colorScheme) {
    return (
      <Tooltip
        label={`${colorMode === "light" ? "Dark" : "Light"} mode`}
        aria-label={`${colorMode === "light" ? "Dark" : "Light"} mode`}
        placement="left"
        hasArrow
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          tabIndex={-1}
        >
          <IconButton
            role="button"
            tabIndex={0}
            aria-label="Toggle theme"
            icon={
              colorMode === "light" ? (
                <FaSun tabIndex={-1} />
              ) : (
                <FaMoon tabIndex={-1} />
              )
            }
            variant={"solid"}
            color={iconButtonColor}
            _hover={{
              bg: iconButtonHoverBg,
            }}
            onKeyDown={handleKeyDown}
            onClick={onClick}
            rounded={"full"}
            autoFocus
          />
        </motion.div>
      </Tooltip>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: colorMode === "light" ? 45 : -45 }}
      whileTap={{ scale: 0.9, rotate: colorMode === "light" ? -45 : 45 }}
      tabIndex={-1}
    >
      <Tooltip label={color} aria-label={color} placement="left" hasArrow>
        <Flex
          role="button"
          tabIndex={0}
          onClick={onClick}
          cursor={"pointer"}
          rounded={"full"}
          onKeyDown={handleKeyDown}
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
