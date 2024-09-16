import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../../me";

export const Contact = () => {
  return (
    <Flex
      id="contact"
      w={"full"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      maxW={"container.xl"}
      p={{
        base: 8,
        md: 16,
      }}
      tabIndex={-1}
    >
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"3xl"}>
          Contact Me
        </Heading>
      </Box>
      <Box w={"full"}>
        <Text
          fontSize={{
            base: "2xl",
            md: "4xl",
          }}
          mt={8}
          color={useColorModeValue("brand.500", "brand.300")}
          as={Link}
          href={`mailto:${me.contact.email}`}
          target="_blank"
        >
          {me.contact.email}
        </Text>
      </Box>
    </Flex>
  );
};

export default Contact;
