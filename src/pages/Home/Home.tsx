import { Box, useColorModeValue } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { Loader } from "../loading/Loader";

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
      <Box scrollBehavior={"smooth"} bg={useColorModeValue("white", "black")}>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Box>
    </Suspense>
  );
};
