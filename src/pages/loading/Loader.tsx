import { Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <Flex
      minH={"100vh"}
      w={"full"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("brand.50", "black")}
    >
      <motion.div
        animate={{
          rotate: [0, 375, 360],
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear",
            bounce: 0.5,
          },
        }}
      >
        <Image src={"/assets/croissant.svg"} h={"64px"} />
      </motion.div>
    </Flex>
  );
};
