import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";
import ReactGA from "react-ga4";

export const Experience = () => {
  return (
    <Flex
      id="experience"
      minH={"50vh"}
      w={"full"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      p={8}
    >
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"3xl"} px={{ base: 0, md: 8 }}>
          Experience
        </Heading>
        <Stack direction={"column"} spacing={4} rowGap={4} mt={8} wrap={"wrap"}>
          {me.experience.map((experience, index) => (
            <SingleExperience
              {...experience}
              key={`${experience.company}-${index}`}
              index={index}
            />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

const SingleExperience = ({
  company,
  location,
  position,
  duration,
  bullets,
  index = 0,
}: {
  company: string;
  location: string;
  position: string;
  duration: string;
  bullets: readonly string[];
  index?: number;
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 1 } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: index * 0.05 },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    trackInView(inView, position);
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <Stack
        direction={"column"}
        justify={"center"}
        pb={8}
        px={{ base: 0, md: 8 }}
        borderRadius={"xl"}
        spacing={4}
      >
        <Stack spacing={0}>
          <Text fontSize={{ base: "md", md: "xl" }} color={useColorModeValue("gray.600", "gray.400")} mb={2}>
            {duration}
          </Text>
          <Heading as={"h3"} fontSize={{ base: "3xl", md: "4xl" }}>
            {company}
          </Heading>
          <Text as={"h4"} fontSize={{ base: "2xl", md: "3xl" }}>
            {position}
          </Text>
        </Stack>
        <Heading as={"span"} fontSize={"xl"} fontWeight={"normal"} mr={2}>
          {location}
        </Heading>

        <Stack direction={"column"} spacing={2}>
        {bullets.map((bullet) => (
          <Heading as={"h5"} fontSize={"lg"} fontWeight={"normal"} key={bullet}>
            - {bullet}
          </Heading>
        ))}
        </Stack>
      </Stack>
    </motion.div>
  );
};

// Analytics
const trackInView = (inView: boolean, label: string) => {
  if (inView) {
    ReactGA.event({
      category: "Experience",
      action: "InView",
      label: label,
    });
  }
}

export default Experience;
