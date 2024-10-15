import {
  Box,
  Collapse,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { useInView } from "react-intersection-observer";
import { me } from "../../../me";
import { FaChevronRight } from "react-icons/fa";

export const Experience = () => {
  return (
    <Flex
      id="experience"
      w={"full"}
      maxW={"container.xl"}
      align={"center"}
      justify={"center"}
      direction={"column"}
      p={8}
      tabIndex={-1}
    >
      <Box w={"full"} maxW={"container.xl"}>
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
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const { isOpen, onToggle } = useDisclosure();

  const borderColor = useColorModeValue("brand.200", "brand.900");

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
    <Stack
      as={motion.div}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      direction={"column"}
      justify={"center"}
      pb={8}
      px={{ base: 0, md: 8 }}
      borderRadius={"xl"}
      spacing={4}
      tabIndex={0}
      onClick={onToggle}
      cursor={"pointer"}
    >
      <Stack spacing={0}>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color={useColorModeValue("brand.800", "brand.100")}
          mb={2}
        >
          {duration}
        </Text>
        <Flex align={"center"} ml={{ base: -4, md: -8 }}>
          <Flex
            as={motion.div}
            animate={{ rotate: isOpen ? 90 : 0 }}
            p={{ base: 1, md: 2 }}
          >
            <Icon
              as={FaChevronRight}
              boxSize={{
                base: 2,
                md: 4,
              }}
              color={"brand.500"}
            />
          </Flex>
          <Heading as={"h3"} fontSize={{ base: "3xl", md: "4xl" }}>
            {company}
          </Heading>
        </Flex>
        <Text as={"h4"} fontSize={{ base: "2xl", md: "3xl" }}>
          {position}
        </Text>
      </Stack>
      <Collapse in={isOpen} animateOpacity unmountOnExit>
        <Stack
          spacing={4}
          borderRadius={"xl"}
          p={4}
          borderColor={borderColor}
          borderWidth={1}
        >
          <Heading as={"span"} fontSize={"xl"} fontWeight={"normal"} mr={2}>
            {location}
          </Heading>
          <Stack direction={"column"} spacing={2}>
            {bullets.map((bullet) => (
              <Heading
                as={"h5"}
                fontSize={"lg"}
                fontWeight={"normal"}
                key={bullet}
              >
                - {bullet}
              </Heading>
            ))}
          </Stack>
        </Stack>
      </Collapse>
    </Stack>
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
};

export default Experience;
