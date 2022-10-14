import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { me } from "../../../me";

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
      <Box w={"full"}>
        <Heading as={"h2"} fontSize={"3xl"}>
          Skills/Technologies
        </Heading>
        <Stack
          direction={"row"}
          spacing={4}
          rowGap={4}
          mt={8}
          divider={<>•</>}
          wrap={"wrap"}
        >
          {me.skills.map((skill) => (
            <SingleSkill {...skill} key={skill.name} />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

const SingleSkill = ({ name, icon }: { name: string; icon?: IconType }) => {
  return (
    <Stack
      direction={"row"}
      align={"center"}
      mx={3}
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
  );
};

export default Skills;
