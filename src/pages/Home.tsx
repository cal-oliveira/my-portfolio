import { Hero } from "./Home/sections/Hero/Hero";
import { NavBar } from "../components/NavBar/NavBar";
import { Projects } from "./Home/sections/Projects/Projects";
import { About } from "./Home/sections/About/About";
import { Footer } from "../components/Footer";

export function Home(){
    return(
        <div>
            <NavBar />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </div>
    )
}