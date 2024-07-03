import { Box, Typography, styled } from "@mui/material"

export function Projects(){

    const StyledProject = styled("div")(({ theme })=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyledBox = styled(Box)(()=>({
        boxShadow: "0px 0px 15px -3px rgba(0,0,0,0.3)",
        height: "15vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
    }))

    return(
        <>
            <StyledProject>
              <Typography color={"black"} variant="h2" textAlign="center">Projects</Typography>

            </StyledProject>
        </>
    )
}