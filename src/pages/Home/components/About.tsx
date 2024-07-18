import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

export const About = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={"hidden"}
      variants={variants}
    >
      <Flex
        id="about"
        minH={"60vh"}
        w={"full"}
        bgGradient={useColorModeValue(
          "linear(to-b, white, blue.200, white)",
          "linear(to-b, black, blue.800, black)"
        )}
        align={"center"}
        justify={"center"}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={{
            base: 12,
            md: 6,
          }}
          w={"full"}
          p={{
            base: 8,
            md: 16,
          }}
        >
          <GridItem>
            <Heading
              fontWeight={"normal"}
              as={"h1"}
              size={{
                base: "3xl",
                md: "4xl",
              }}
              color={useColorModeValue("gray.800", "gray.100")}
            >
              {me.bigHeading.black} {" "}
              <Text
                as={"span"}
                color={useColorModeValue("blue.600", "blue.300")}
              >
                {me.bigHeading.blue}
              </Text>
            </Heading>
          </GridItem>
          <GridItem>
            <Flex w={"full"} h={"full"} maxW={"600px"}>
              <Box>
                <Heading as={"h2"} fontSize={"4xl"}>
                  About
                </Heading>
                <Text fontSize={"xl"} mt={4} align={{ base: "left", md: "justify" }}>
                  {me.about}
                </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </motion.div>
  );
};

export default About;
