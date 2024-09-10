import {
  Box,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { me } from "../../me";

export const Footer = () => {
  return (
    <Container maxW={"container.xl"}>
      <Stack
        minH={"20vh"}
        w={"full"}
        align={"center"}
        justify={"center"}
        direction={"column"}
      >
        <BrandedDivider />
        <Text fontWeight={"bold"}>Made with ❤️ by arhammusheer</Text>
        <Text>
          All rights reserved © Mohammad Arham {new Date().getFullYear()}
        </Text>
      </Stack>
    </Container>
  );
};

const BrandedDivider = () => {
  const borderColor = useColorModeValue("brand.200", "brand.700");
  return (
    <Stack
      direction={"row"}
      w={"full"}
      align={"center"}
      justify={"center"}
      spacing={4}
      py={4}
    >
      <Box w={"full"} h={"1px"} bg={borderColor} />
      <Image
        src={"/assets/croissant.svg"}
        alt={`${me.name} profile picture`}
        boxSize={8}
      />
      <Box w={"full"} h={"1px"} bg={borderColor} />
    </Stack>
  );
};

export default Footer;
