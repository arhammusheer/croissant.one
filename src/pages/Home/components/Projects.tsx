import {
  Avatar,
  Box,
  Button,
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
import { useEffect, useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState(me.projects);
  const [showCount, setShowCount] = useState(4);
  const [showMore, setShowMore] = useState(true);

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
          {projects.map((project, i) => (
            <GridItem key={`project-${i}`}>
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
  backgroundImage,
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
  backgroundImage?: string;
}) => {
  const overlay = useColorModeValue(
    "linear(to-r, blue.50, whiteAlpha.700)",
    "linear(to-t, blackAlpha.900, blackAlpha.700)"
  );
  const bg = useColorModeValue("blue.50", "gray.900");
  return (
    <Stack
      direction={"column"}
      w={"full"}
      h={"full"}
      borderRadius={"2xl"}
      border={"1px"}
      bg={bg}
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
      // Image background
      bgImage={`url(${backgroundImage})`}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
    >
      <Box
        h={"full"}
        w={"full"}
        bgGradient={backgroundImage ? overlay : ""}
        p={4}
        borderRadius={"2xl"}
      >
        <Flex align={"center"} justify={"space-between"} w={"full"}>
          <Heading
            as={"h3"}
            fontSize={"2xl"}
            color={useColorModeValue("blue.700", "white")}
          >
            {name}
          </Heading>
          <Image src={image} h={"50px"} w={"50px"} borderRadius={"xl"} objectFit={"cover"} />
        </Flex>
        <Stack direction={"row"} spacing={2} my={2} wrap={"wrap"}>
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
            <Pill key={technology}>{technology}</Pill>
          ))}
        </Stack>
      </Box>
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
