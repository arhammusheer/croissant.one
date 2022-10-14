import {
  Avatar,
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
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
import { me } from "../../me";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack h={"10vh"} w={"full"} align={"center"} justify={"center"}>
      <Container maxW={"container.xl"}>
        <Flex justify={"space-between"}>
          <Avatar
            size={"md"}
            src={me.image}
            border={"1px"}
            borderColor={useColorModeValue("blue.400", "gray.700")}
          />
          {isMobile ? <MobileOptions /> : <DesktopOptions />}
        </Flex>
      </Container>
    </Stack>
  );
};

const DesktopOptions = () => {
  return (
    <Stack direction={"row"} spacing={6} align={"center"}>
      {options.map((option) => (
        <Flex
          align={"center"}
          key={option.name}
          as={"a"}
          href={option.href}
          bg={"blue.50"}
          px={4}
          py={1}
          rounded={"md"}
          _hover={{
            bg: "blue.100",
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

const MobileOptions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<FaHamburger />}
        variant={"ghost"}
        onClick={onOpen}
      />
      <BottomSheet isOpen={isOpen} onClose={onClose} />
    </>
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
    <Drawer isOpen={isOpen} placement={"bottom"} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Stack spacing={4} divider={<StackDivider />} my={8}>
            {options.map((option) => (
              <Flex
                as={"a"}
                href={option.href}
                key={option.name}
                onClick={onClose}
              >
                <Text fontWeight={"bold"}>{option.name}</Text>
              </Flex>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const options = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Skills",
    href: "/#skills",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];
