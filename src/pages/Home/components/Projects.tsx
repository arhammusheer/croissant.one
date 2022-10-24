import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
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
        <Grid
          mt={4}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: me.projects.length > 2 ? "repeat(2, 1fr)" : "repeat(1, 1fr)",
          }}
          gap={6}
        >
          {me.projects.map((project) => (
            <GridItem key={project.name}>
              <SingleProject {...project} />
            </GridItem>
          ))}
        </Grid>
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
      h={"full"}
      bg={useColorModeValue("blue.50", "gray.900")}
      p={6}
      borderRadius={"2xl"}
      border={"1px"}
      borderColor={useColorModeValue("blue.200", "gray.700")}
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
        <Heading
          as={"h3"}
          fontSize={"2xl"}
          color={useColorModeValue("blue.700", "white")}
        >
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
      <Stack direction={"row"} wrap={"wrap"} rowGap={3}>
        {technologies.map((technology) => (
          <Box mx={2}>
            <Pill key={technology}>{technology}</Pill>
          </Box>
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
