import { Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const facts = [
  "This website is fully navigable with a keyboard.",
  "I also build PCBs and make hardware projects.",
];

const FunFact: React.FC = () => {
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prevFact) => (prevFact + 1) % facts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxW={"container.xl"} centerContent>
      <Stack direction={"row"} wrap={"wrap"}>
        <Text
          fontSize={"xl"}
          color={useColorModeValue("brand.600", "brand.300")}
					fontWeight={"bold"}
					bg={useColorModeValue("brand.100", "brand.900")}
					borderRadius={"xl"}
					px={2}
					border={"1px"}
					borderColor={useColorModeValue("brand.200", "brand.600")}
        >
          Fun Fact
        </Text>
        <Text fontSize={"xl"} maxW={"600px"} as={motion.text}>
          {facts[currentFact]}
        </Text>
      </Stack>
    </Container>
  );
};

export default FunFact;
