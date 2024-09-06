import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { me } from "../../../me";

const FunFact: React.FC = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [randomFacts] = useState(
    me.facts?.length ? me.facts.sort(() => 0.5 - Math.random()) : []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prevFact) => (prevFact + 1) % randomFacts.length);
    }, 5000); // Adjusted to 4 seconds to better view the animation

    return () => clearInterval(interval);
  }, []);

  if (!randomFacts.length) {
    return <></>;
  }

  return (
    <Stack
      direction={"row"}
      wrap={"wrap"}
      spacing={4}
      w={"full"}
      align={"center"}
      justify={"center"}
    >
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
      <AnimatePresence mode={"wait"}>
        <motion.div
          key={currentFact}
          initial={{ opacity: 0, y: "50%" }} // Starting position and opacity
          animate={{ opacity: 1, y: 0 }} // Final position and opacity
          exit={{ opacity: 0, y: "-50%" }} // Exit animation
          transition={{ duration: 0.5 }} // Animation duration
        >
          <Text fontSize={"xl"} maxW={"600px"}>
            {randomFacts[currentFact]}
          </Text>
        </motion.div>
      </AnimatePresence>
    </Stack>
  );
};

export default FunFact;
