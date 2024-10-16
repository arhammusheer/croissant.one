import { Flex, useColorModeValue } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Loader } from "../loading/Loader";
import FunFact from "./components/FunFact";

// Lazy Import
const Navbar = lazy(() => import("../common/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Footer = lazy(() => import("../common/Footer"));
const Contact = lazy(() => import("./components/Contact"));

export const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Flex
        scrollBehavior={"smooth"}
        bg={useColorModeValue("brand.50", "brand.950")}
        direction={"column"}
        align={"center"}
      >
        <Navbar />
        <Hero />
        <FunFact />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Flex>
    </Suspense>
  );
};
