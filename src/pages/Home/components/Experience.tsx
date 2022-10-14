import { Box, Flex, Heading, Icon, Stack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { me } from "../../../me";

export const Experience = () => {
  return (
    <Flex
      id="experience"
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
          Experience
        </Heading>
        <Stack direction={"column"} spacing={4} rowGap={4} mt={8} wrap={"wrap"}>
          {me.experience.map((experience) => (
            <SingleExperience {...experience} key={experience.company} />
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
}: {
  company: string;
  location: string;
  position: string;
  duration: string;
  bullets: readonly string[];
}) => {
  return (
    <Stack
      direction={"column"}
      justify={"center"}
      mx={3}
      px={2}
      py={1}
      borderRadius={"xl"}
    >
      <Heading as={"h3"} fontSize={"2xl"}>
        {company}
      </Heading>
      <Heading as={"h4"} fontSize={"xl"} fontWeight={"normal"}>
        {position}
      </Heading>
      <Heading as={"h5"} fontSize={"md"} fontWeight={"normal"}>
        {duration}
      </Heading>
      <Heading as={"h5"} fontSize={"md"} fontWeight={"normal"}>
        {location}
      </Heading>
      <Stack direction={"column"} />
      {bullets.map((bullet) => (
        <Heading as={"h5"} fontSize={"md"} fontWeight={"normal"} key={bullet}>
          - {bullet}
        </Heading>
      ))}
    </Stack>
  );
};

export default Experience;
