import {
  Avatar,
  Box,
  chakra,
  Heading,
  Icon,
  shouldForwardProp,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
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
      h={"90vh"}
      spacing={0}
      justifyContent={"center"}
      alignItems={"center"}
      bg={useColorModeValue("white", "black")}
      zIndex={1}
      p={{
        base: 4,
        md: 12,
      }}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <Stack
        h={"full"}
        w={"full"}
        bg={useColorModeValue("blue.100", "gray.900")}
        rounded={"3xl"}
        border={"1px"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        p={{
          base: 4,
          md: 12,
        }}
        justify={"center"}
      >
        <Avatar size={"xl"} src={me.image} border={"2px"} />
        <Heading
          fontWeight={"normal"}
          as={"h1"}
          size={"3xl"}
          color={useColorModeValue("blue.700", "gray.100")}
        >
          Hi, I'm {me.name}
        </Heading>
        <Text fontSize={"2xl"}>{me.subtitle}</Text>
        <Text fontSize={"xl"}>{me.tagline}</Text>
        <Box mt={8} />
        <Stack direction={"row"} spacing={2}>
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
    bg: string;
    color: string;
  };
}) => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <ChakraBox
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <Stack
        direction={"row"}
        as={"a"}
        href={url}
        target={"_blank"}
        align={"center"}
        bg={useColorModeValue("white", "gray.800")}
        px={4}
        py={1}
        rounded={"full"}
        textDecoration={"none"}
        _hover={{
          bg: hover.bg,
          color: hover.color,
        }}
      >
        <Icon as={icon} />
        <Text fontWeight={"bold"} fontSize={"lg"}>
          {name}
        </Text>
      </Stack>
    </ChakraBox>
  );
};

export default Hero;
