import {
  Avatar,
  Box,
  Container,
  Flex,
  IconButton,
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

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack minH={"10vh"} w={"full"} align={"center"} justify={"center"}>
        <Container maxW={"container.xl"}>
          <Flex justify={"space-between"}>
            <Avatar
              size={"md"}
              src={me.image}
              border={"1px"}
              borderColor={useColorModeValue("blue.400", "gray.700")}
            />
            {isMobile ? (
              <>
                <IconButton
                  aria-label="Open menu"
                  icon={<FaHamburger />}
                  variant={"ghost"}
                  onClick={isOpen ? onClose : onOpen}
                />
              </>
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
    <Stack direction={"row"} spacing={6} align={"center"}>
      {options.map((option) => (
        <Flex
          align={"center"}
          key={option.name}
          as={Link}
          to={option.href}
          smooth={true}
          cursor={"pointer"}
          bg={useColorModeValue("blue.50", "gray.700")}
          px={4}
          py={1}
          rounded={"md"}
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
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? 500 : 0, opacity: isOpen ? 1 : 0 }}
    >
      <Stack p={8} divider={<StackDivider />} spacing={4}>
        {options.map((option) => (
          <Box
            w={"full"}
            key={option.name}
            h={"full"}
            as={Link}
            to={option.href}
            smooth={true}
            cursor={"pointer"}
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
];

export default Navbar;
