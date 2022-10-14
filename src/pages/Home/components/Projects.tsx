import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { me } from "../../../me";
import { FiExternalLink } from "react-icons/fi";

export const Projects = () => {
  return (
    <Flex
      id="projects"
      minH={"100vh"}
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
          Projects
        </Heading>
        <Stack direction={"column"} spacing={4} mt={8}>
          {me.projects.map((project) => (
            <SingleProject {...project} key={project.name} />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

const SingleProject = ({
  name,
  description,
  contribution,
  technologies,
  links,
  image,
}: {
  name: string;
  description: string;
  contribution: string;
  technologies: readonly string[];
  links: readonly {
    name: string;
    uri: string;
  }[];
  image: string;
}) => {
  return (
    <Stack
      direction={"column"}
      w={"full"}
      bg={"blue.50"}
      p={6}
      borderRadius={"2xl"}
      border={"1px"}
      borderColor={"blue.100"}
      as={motion.div}
      justify={"center"}
      whileHover={{
        borderWidth: "2px",
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 0.99,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Flex align={"center"} justify={"space-between"}>
        <Heading as={"h3"} fontSize={"2xl"} color={"blue.700"}>
          {name}
        </Heading>
        <Image src={image} h={"50px"} w={"50px"} borderRadius={"xl"} />
      </Flex>
      <Stack direction={"row"} spacing={2} mt={4}>
        {links.map((link) => (
          <OutLink href={link.uri} key={link.name}>
            {link.name}
          </OutLink>
        ))}
      </Stack>
      <Text>{description}</Text>
      <Box h={2} />
      <Heading as={"h4"} fontSize={"lg"} color={"blue.600"}>
        What I did
      </Heading>
      <Text>{contribution}</Text>
      <Box h={5} />
      <Stack direction={"row"} wrap={"wrap"} gap={1}>
        {technologies.map((technology) => (
          <Pill key={technology}>{technology}</Pill>
        ))}
      </Stack>
    </Stack>
  );
};

const Pill = ({ children }: { children: string }) => {
  return (
    <Box
      bg={"blue.100"}
      color={"blue.800"}
      px={2}
      py={0.5}
      borderRadius={"2xl"}
      fontSize={"sm"}
      fontWeight={"bold"}
    >
      {children}
    </Box>
  );
};

const OutLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <Flex
      as={"a"}
      href={href}
      target={"_blank"}
      rel={"noreferrer"}
      align={"center"}
      color={"blue.500"}
    >
      {children}&nbsp;
      <Icon as={FiExternalLink} />
    </Flex>
  );
};

export default Projects;