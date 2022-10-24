import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { me } from "../../../me";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Education = () => {
  return (
    <Flex
      id={"education"}
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
  awards: readonly string[];
}) => {
  const [ref, inView] = useInView();
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
      <Stack direction={"column"}>
        <Heading as={"h3"} fontSize={"2xl"}>
          {school}
        </Heading>
        <Heading as={"h4"} fontSize={"xl"} fontWeight={"normal"}>
          {degree} in {major}
        </Heading>
        <Heading as={"h5"} fontSize={"md"} fontWeight={"normal"}>
          {graduation}
        </Heading>
        <Box h={"10px"} />
        {awards.map((award) => (
          <Heading as={"h5"} fontSize={"md"} fontWeight={"normal"} key={award}>
            {award}
          </Heading>
        ))}
      </Stack>
    </motion.div>
  );
};

export default Education;
