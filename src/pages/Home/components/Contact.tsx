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
      minH={"50vh"}
      w={"full"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      p={{
        base: 8,
        md: 16,
      }}
    >
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"3xl"}>
          Contact Me
        </Heading>
      </Box>
      <Box w={"full"}>
        <Heading
          as={"h3"}
          fontSize={{
            base: "2xl",
            md: "3xl",
          }}
          mt={4}
        >
          I'll keep it simple.
        </Heading>
        <Text fontSize={"3xl"}>Here is my email</Text>
        <Text
          fontSize={{
            base: "3xl",
            md: "4xl",
          }}
          mt={8}
          color={useColorModeValue("blue.500", "blue.300")}
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
