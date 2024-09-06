import {
  Box,
  chakra,
  Heading,
  Icon,
  Image,
  shouldForwardProp,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import ReactGA from "react-ga4";
import { IconType } from "react-icons";
import { me } from "../../../me";

export const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  return (
    <Stack
      id={"home"}
      w={"full"}
      height={{ base: "100%", md: "80vh" }}
      spacing={0}
      justifyContent={"center"}
      alignItems={"center"}
      bg={useColorModeValue("brand.50", "brand.950")}
      zIndex={1}
      px={4}
      py={{
        base: 4,
        md: 8,
      }}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={variants}
      tabIndex={-1}
      maxW={"container.xl"}
    >
      <Stack
        h={"full"}
        w={"full"}
        bg={useColorModeValue("brand.100", "brand.900")}
        rounded={"3xl"}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "brand.700")}
        p={{
          base: 4,
          md: 12,
        }}
        justify={"center"}
        spacing={8}
      >
        <Image
          rounded={"full"}
          boxSize={{
            base: "180px",
            md: "150px",
          }}
          src={me.image}
          border={"2px"}
          borderColor={useColorModeValue("brand.400", "brand.600")}
          alt-text={"Profile picture"}
          alignSelf={{
            base: "center",
            md: "flex-start",
          }}
        />
        <Stack direction={"column"}>
          <Heading
            fontWeight={"normal"}
            as={"h1"}
            size={{
              base: "3xl",
              md: "4xl",
            }}
            color={useColorModeValue("brand.600", "gray.100")}
          >
            Hi, I'm{" "}
            <Box
              as={"span"}
              color={useColorModeValue("brand.900", "brand.100")}
            >
              {me.name}
            </Box>
          </Heading>
          <Heading as={"h3"} fontSize={"2xl"}>
            {me.subtitle}
          </Heading>
          <Text fontSize={"xl"} mt={4} maxW={"600px"}>
            {me.tagline}
          </Text>
        </Stack>
        <Stack
          direction={"row"}
          spacing={0}
          wrap={"wrap"}
          rowGap={2}
          columnGap={2}
        >
          {me.social.map((social) => (
            <Social
              key={social.name}
              name={social.name}
              icon={social.icon}
              url={social.uri}
              hover={social.hover}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const Social = ({
  name,
  icon,
  url,
  hover,
}: {
  name: string;
  icon: IconType;
  url: string;
  hover: {
    bg: [string, string];
    color: string;
  };
}) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const onClick = () => {
    trackSocial(name);
  };

  return (
    <ChakraBox
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      tabIndex={-1}
    >
      <Stack
        direction={"row"}
        as={"a"}
        href={url}
        target={"_blank"}
        align={"center"}
        bg={useColorModeValue("brand.50", "brand.950")}
        border={"1px"}
        borderColor={useColorModeValue("brand.200", "brand.700")}
        px={4}
        py={1}
        rounded={"full"}
        textDecoration={"none"}
        _hover={{
          bg: useColorModeValue(hover.bg[0], hover.bg[1]),
          color: hover.color,
        }}
        tabIndex={0}
        onClick={onClick}
      >
        <Icon as={icon} />
        <Text fontWeight={"bold"} fontSize={"lg"}>
          {name}
        </Text>
      </Stack>
    </ChakraBox>
  );
};

// Analytics (ReactGA4)
const trackSocial = (name: string) => {
  ReactGA.event({
    category: "Social",
    action: "Clicked",
    label: name,
  });
};

export default Hero;
