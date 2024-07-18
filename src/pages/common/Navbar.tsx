import {
  Avatar,
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-scroll";
import { me } from "../../me";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack minH={"10vh"} w={"full"} align={"center"} justify={"center"}>
        <Container maxW={"container.xl"}>
          <Flex
            justify={"space-between"}
            bg={useColorModeValue("blue.50", "gray.800")}
            height={"64px"}
            px={3}
            rounded={"full"}
            align={"center"}
          >
            <Image
              src={"/assets/croissant.svg"}
              alt={`${me.name} profile picture`}
              boxSize={10}
              as={motion.img}
              whileHover={{ rotate: -120, scale: 1.1 }}
              whileTap={{ rotate: 120, scale: 1.05 }}
            />
            {isMobile ? (
              <Box>
                <ThemeSwitcher />
                <IconButton
                  aria-label="Open menu"
                  icon={<FaHamburger />}
                  variant={"ghost"}
                  onClick={isOpen ? onClose : onOpen}
                  rounded={"full"}
                  colorScheme="blue"
                />
              </Box>
            ) : (
              <DesktopOptions />
            )}
          </Flex>
        </Container>
      </Stack>
      <BottomSheet isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const DesktopOptions = () => {
  return (
    <Stack
      direction={"row"}
      spacing={0}
      align={"center"}
      justify={"center"}
      height={"full"}
    >
      {options.map((option) => (
        <Flex
          align={"center"}
          key={option.name}
          as={Link}
          to={option.href}
          smooth={true}
          cursor={"pointer"}
          px={3}
          height={"full"}
          _hover={{
            bg: useColorModeValue("blue.100", "gray.600"),
          }}
          transition={"all 0.2s ease-in-out"}
        >
          <Text
            fontWeight={"bold"}
            color={useColorModeValue("blue.700", "gray.100")}
          >
            {option.name}
          </Text>
        </Flex>
      ))}
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
  return (
    <motion.div
      initial={{ height: 0, opacity: 0, zIndex: -1 }}
      animate={{
        height: isOpen ? 500 : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{}}
    >
      <Stack p={8} divider={<StackDivider />} spacing={4} zIndex={-1}>
        {options.map((option) => (
          <Box
            w={"full"}
            key={option.name}
            h={"full"}
            as={Link}
            to={isOpen ? option.href : ""}
            offset={-500}
            smooth={true}
            cursor={isOpen ? "pointer" : "default"}
            onClick={onClose}
          >
            {option.name}
          </Box>
        ))}
      </Stack>
    </motion.div>
  );
};

const options = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Education",
    href: "education",
  },
  {
    name: "Experience",
    href: "experience",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

export default Navbar;
