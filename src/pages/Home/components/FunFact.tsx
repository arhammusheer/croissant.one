import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { me } from "../../../me";

const FunFact: React.FC = () => {
  const [currentFact, setCurrentFact] = useState(0);
	const [randomFacts] = useState(me.facts || []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * randomFacts.length);
      setCurrentFact(randomIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!randomFacts.length) {
    return <></>;
  }

  return (
    <Stack
      direction={"row"}
      wrap={"wrap"}
      spacing={0}
      w={"full"}
      align={"center"}
      justify={"center"}
    >
      <Text
        fontSize={"lg"}
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
          <Text
            fontSize={"lg"}
            color={useColorModeValue("brand.800", "brand.100")}
						px={4}
          >
            {randomFacts[currentFact]}
          </Text>
        </motion.div>
      </AnimatePresence>
    </Stack>
  );
};

export default FunFact;
