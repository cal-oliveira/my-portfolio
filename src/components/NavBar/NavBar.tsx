import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const StyledToolbar = styled(Toolbar)(()=>({
    display: "flex",
    justifyContent: "space-evenly"
}))

export function NavBar(){
    return(
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Hard Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}