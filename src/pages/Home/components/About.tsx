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
  const { ref, inView } = useInView({ triggerOnce: true });
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
      style={{ width: "100%" }}
    >
      <Flex
        id="about"
        minH={"500px"}
        w={"full"}
        maxW={"100vw"}
        bgGradient={useColorModeValue(
          "linear(to-b, brand.50, brand.200, brand.50)",
          "linear(to-b, brand.950, brand.800, brand.950)",
        )}
        align={"center"}
        justify={"center"}
        tabIndex={-1}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          maxW={"container.xl"}
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
          <GridItem tabIndex={0}>
            <Heading
              fontWeight={"normal"}
              as={"h1"}
              size={{
                base: "3xl",
                md: "4xl",
              }}
              color={useColorModeValue("brand.950", "brand.50")}
            >
              {me.bigHeading.black}{" "}
              <Text
                as={"span"}
                color={useColorModeValue("brand.600", "brand.300")}
              >
                {me.bigHeading.blue}
              </Text>
            </Heading>
          </GridItem>
          <GridItem tabIndex={0}>
            <Flex w={"full"} h={"full"} maxW={"600px"}>
              <Box>
                <Heading as={"h2"} fontSize={"4xl"}>
                  About
                </Heading>
                <Text
                  fontSize={"xl"}
                  mt={4}
                  align={{ base: "left", md: "justify" }}
                >
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
