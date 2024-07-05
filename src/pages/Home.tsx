import { Hero } from "./Home/sections/Hero/Hero";
import { NavBar } from "../components/NavBar/NavBar";
import { Projects } from "./Home/sections/Projects/Projects";
import { About } from "./Home/sections/About/About";
import { Footer } from "../components/Footer";
import { Element } from "react-scroll"

export function Home(){
    return(
        <div>
            <NavBar />
            <Element name="home">
                <Hero />
            </Element>
            <Element name="about">
                <About/>
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Footer />
        </div>
    )
}