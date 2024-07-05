import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link } from "react-scroll";

const StyledToolbar = styled(Toolbar)(()=>({
    display: "flex",
    justifyContent: "space-evenly"
}))

export function NavBar(){
    return(
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <Link to="about" smooth={true} duration={600}>
                        <MenuItem>About</MenuItem>
                    </Link>
                    <Link to="skills" smooth={true} duration={600}>
                        <MenuItem>Hard Skills</MenuItem>
                    </Link>
                    <Link to="projects" smooth={true} duration={600}>
                        <MenuItem>Projects</MenuItem>
                    </Link>
                </StyledToolbar>
            </AppBar>
        </>
    )
}