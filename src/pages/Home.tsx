import { Hero } from "./Home/sections/Hero/Hero";
import { NavBar } from "../components/NavBar/NavBar";
import { Projects } from "./Home/sections/Projects/Projects";

export function Home(){
    return(
        <div>
            <NavBar />
            <Hero />
            <Projects />
        </div>
    )
}