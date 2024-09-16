import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";

export const Education = () => {
  return (
    <Flex
      id={"education"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      maxW={"container.xl"}
      w={"full"}
      p={{
        base: 8,
        md: 16,
      }}
      tabIndex={-1}
    >
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"3xl"}>
          Education
        </Heading>
        <Stack direction={"column"} spacing={4} mt={8}>
          {me.education.map((education) => (
            <SingleEducation key={education.school} {...education} />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

const SingleEducation = ({
  degree,
  major,
  school,
  graduation,
  awards,
}: {
  degree: string;
  major: string;
  school: string;
  graduation: string;
  awards?: readonly string[];
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 1 } },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
      initial="hidden"
      variants={variants}
    >
      <Stack direction={"column"} tabIndex={0}>
        <Text
          as={"h5"}
          fontSize={"xl"}
          color={useColorModeValue("brand.800", "brand.100")}
          mb={2}
        >
          {graduation}
        </Text>
        <Heading as={"h3"} fontSize={{ base: "3xl", md: "4xl" }}>
          {school}
        </Heading>
        <Text as={"h4"} fontSize={{ base: "2xl", md: "3xl" }}>
          {degree} in {major}
        </Text>

        {awards && awards.length > 0 && <Box h={"10px"} />}
        {awards &&
          awards.length > 0 &&
          awards.map((award) => (
            <Heading
              as={"h5"}
              fontSize={"xl"}
              fontWeight={"normal"}
              key={award}
            >
              {award}
            </Heading>
          ))}
      </Stack>
    </motion.div>
  );
};

export default Education;
