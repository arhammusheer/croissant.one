import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";
import {
  FaBriefcase,
  FaHamburger,
  FaHardHat,
  FaHome,
  FaMailBulk,
  FaSchool,
  FaTimes,
  FaToolbox,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { me } from "../../me";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue("brand.200", "brand.700");

  const preventRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Stack
        minH={"10vh"}
        w={"full"}
        align={"center"}
        justify={"center"}
        maxW={"container.xl"}
        px={4}
      >
        <Flex
          justify={"space-between"}
          bg={useColorModeValue("brand.100", "brand.900")}
          height={"64px"}
          px={3}
          w={"full"}
          rounded={"full"}
          align={"center"}
          border={"1px"}
          borderColor={borderColor}
        >
          <Image
            src={"/assets/croissant.svg"}
            alt={`${me.name} profile picture`}
            boxSize={10}
            as={motion.img}
            whileHover={{ rotate: -120, scale: 1.1 }}
            whileTap={{ rotate: 120, scale: 1.05 }}
            onContextMenu={preventRightClick}
          />
          {isMobile ? (
            <Flex align={"center"}>
              <ThemeSwitcher />
              <IconButton
                aria-label="Open menu"
                icon={<FaHamburger />}
                variant={"ghost"}
                onClick={isOpen ? onClose : onOpen}
                rounded={"full"}
                colorScheme="brand"
              />
            </Flex>
          ) : (
            <DesktopOptions />
          )}
        </Flex>
      </Stack>
      <BottomSheet isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const DesktopOptions = () => {
  const borderColor = useColorModeValue("brand.200", "brand.500");

  return (
    <Stack
      direction={"row"}
      spacing={0}
      align={"center"}
      justify={"center"}
      height={"full"}
      py={1}
    >
      {options.map((option) => (
        <motion.div
          whileTap={{ scale: 0.9 }}
          key={option.name}
          style={{ height: "100%" }}
          tabIndex={-1}
        >
          <Flex
            align={"center"}
            as={Link}
            to={option.href}
            smooth={true}
            cursor={"pointer"}
            px={3}
            borderRadius={"lg"}
            h={"full"}
            tabIndex={0} // Make focusable with tab
            onClick={() => trackClick(option.name, "Desktop")}
            onKeyDown={(e) => handleKeyDown(e, option.href, option.name)}
            _hover={{
              backgroundColor: useColorModeValue("brand.50", "brand.600"),
              border: "1px",
              borderColor: borderColor,
              // Transition effect
              transition: "background-color 0.25s",
            }}
            _focus={{
              outline: "none",
              boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)", // Focus style
            }}
          >
            <Text
              fontWeight={"bold"}
              color={useColorModeValue("brand.800", "brand.50")}
            >
              {option.name}
            </Text>
          </Flex>
        </motion.div>
      ))}
      <Box w={2} />
      <ThemeSwitcher />
    </Stack>
  );
};

const BottomSheet = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const onClick = (name: string) => {
    onClose();
    trackClick(name, "Mobile");
  };

  const borderColor = useColorModeValue("brand.200", "brand.600");

  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      onClose={onClose}
      // finalFocusRef={}
    >
      <DrawerOverlay />
      <DrawerContent bg={useColorModeValue("brand.50", "brand.950")} py={4}>
        <DrawerHeader>
          <Stack direction={"row"} justify={"space-between"} align={"center"}>
            <Image
              src={"/assets/croissant.svg"}
              alt={`${me.name} profile picture`}
              boxSize={10}
              as={motion.img}
              whileHover={{ rotate: -120, scale: 1.1 }}
              whileTap={{ rotate: 120, scale: 1.05 }}
            />
            <IconButton
              aria-label="Close menu"
              icon={<FaTimes />}
              variant={"ghost"}
              onClick={onClose}
              rounded={"full"}
              colorScheme="brand"
            />
          </Stack>
        </DrawerHeader>
        <DrawerBody>
          <Stack
            direction={"column"}
            spacing={0}
            justify={"center"}
            height={"full"}
          >
            {options.map((option) => (
              <Stack
                p={4}
                key={option.name}
                role={"button"}
                as={Link}
                to={isOpen ? option.href : ""}
                smooth={true}
                cursor={isOpen ? "pointer" : "default"}
                onClick={() => onClick(option.name)}
                onKeyDown={(e: React.KeyboardEvent) => {
                  handleKeyDown(e, option.href, option.name);
                  if (e.key === "Escape") {
                    onClose();
                  }
                }}
                border={"1px"}
                borderColor="transparent"
                borderRadius={"lg"}
                _hover={{
                  backgroundColor: useColorModeValue("brand.50", "brand.700"),
                  borderColor: borderColor,
                }}
                tabIndex={isOpen ? 0 : -1} // Make focusable only when open
                direction={"row"}
                spacing={4}
                align={"center"}
                color={useColorModeValue("brand.800", "brand.50")}
              >
                <Icon as={option.icon} boxSize={4} />
                <Text fontWeight={"bold"}>{option.name}</Text>
              </Stack>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const handleKeyDown = (e: React.KeyboardEvent, href: string, name: string) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    document.getElementById(href)?.focus({ preventScroll: false });
    trackClick(name, "Keyboard");
  }
};

const options = [
  { name: "Home", href: "home", icon: FaHome },
  { name: "About", href: "about", icon: FaUser },
  { name: "Education", href: "education", icon: FaSchool },
  { name: "Experience", href: "experience", icon: FaBriefcase },
  { name: "Projects", href: "projects", icon: FaHardHat },
  { name: "Skills", href: "skills", icon: FaToolbox },
  { name: "Contact", href: "contact", icon: FaMailBulk },
];

// Analytics
const trackClick = (
  name: string,
  variant: "Mobile" | "Desktop" | "Keyboard" = "Desktop"
) => {
  ReactGA.event({
    category: "Navigation",
    action: "Click",
    label: `${name} - ${variant}`,
  });
};

export default Navbar;
