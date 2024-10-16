import { Stack, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { me } from "../../../me";

const FunFact: React.FC = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [wait, setWait] = useState(5000);
  const [randomFacts] = useState(
    me.facts?.sort(() => Math.random() - 0.5) || []
  );

  const funFactColor = useColorModeValue("brand.800", "brand.100");

  const next = () => {
    setCurrentFact((prev) => (prev + 1) % randomFacts.length);
  };

  const onClick = () => {
    next();
    setWait(5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, wait);

    return () => {
      clearInterval(interval);
    };
  }, [currentFact, wait]);

  if (!randomFacts.length) {
    return <></>;
  }

  return (
    <Stack
      direction={{
        base: "column",
        md: "row",
      }}
      wrap={"wrap"}
      spacing={2}
      w={"full"}
      justify={"center"}
      px={4}
    >
      <Text
        maxW={"fit-content"}
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
          <Tooltip
            label={"Click for next fun fact"}
            aria-label={"Click for next fun fact"}
            hasArrow
          >
            <Text
              fontSize={"lg"}
              color={funFactColor}
              onClick={onClick}
              cursor={"pointer"}
            >
              {randomFacts[currentFact]}
            </Text>
          </Tooltip>
        </motion.div>
      </AnimatePresence>
    </Stack>
  );
};

export default FunFact;
