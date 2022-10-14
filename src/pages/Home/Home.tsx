import { Navbar } from "../common/Navbar";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Footer } from "../common/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Box } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box scrollBehavior={"smooth"}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </Box>
  );
};
