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
import { TbArrowWaveLeftUp } from "react-icons/tb";

export const Skills = () => {
  return (
    <Flex
      id="skills"
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
      <Stack w={"full"} spacing={4}>
        <Heading as={"h2"} fontSize={"3xl"}>
          Skills/Technologies
        </Heading>
        <Stack
          direction={"row"}
          spacing={0}
          rowGap={2}
          mt={8}
          wrap={"wrap"}
          columnGap={2}
        >
          {me.skills.map((skill, index) => (
            <SingleSkill {...skill} key={skill.name} index={index} />
          ))}
        </Stack>
        <TryDraggingMe />
      </Stack>
    </Flex>
  );
};

const TryDraggingMe = () => {
  return (
    <Stack
      w={"full"}
      p={2}
      justify={"flex-end"}
      direction={"row"}
      align={"center"}
    >
      <Icon as={TbArrowWaveLeftUp} h={12} w={12} />
      <Text fontSize={"xl"} fontWeight={"bold"} fontFamily={"Short Stack"}>
        Try dragging me!
      </Text>
    </Stack>
  );
};

const SingleSkill = ({
  name,
  icon,
  index = 0,
}: {
  name: string;
  icon?: IconType;
  index?: number;
}) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, x: 20, transition: { duration: 0.5 } },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      },
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
      initial="hidden"
      variants={variants}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.4}
      // Drag Spring
      dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
    >
      <Stack
        direction={"row"}
        align={"center"}
        bg={useColorModeValue("blue.100", "gray.900")}
        px={2}
        py={1}
        borderRadius={"xl"}
      >
        {icon && <Icon as={icon} />}
        <Heading as={"h3"} fontSize={"2xl"}>
          {name}
        </Heading>
      </Stack>
    </motion.div>
  );
};

export default Skills;
