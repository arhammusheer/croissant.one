import { Navbar } from "../common/Navbar";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};
