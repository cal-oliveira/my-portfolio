import { Hero } from "./Home/sections/Hero/Hero";
import { NavBar } from "../components/NavBar/NavBar";

export function Home(){
    return(
        <div>
            <NavBar />
            <Hero />
        </div>
    )
}