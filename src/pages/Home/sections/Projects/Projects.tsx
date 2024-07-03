import { Box, Container, Grid, Typography, styled } from "@mui/material"

export function Projects(){

    const StyledProject = styled("div")(({ theme })=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        
    }))

    const StyledBox = styled(Box)(()=>({
        border: "2px solid rgba(211,211,211,0.2)",
        height: "50vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        borderRadius: "4px"
    }))

    return(
        <>
            <StyledProject>
                <Container>
                  <Typography color={"white"} variant="h2" textAlign="center" padding={5}>Projects</Typography>

                  <Grid container spacing={4}>
                    <Grid item md={6}>
                        <StyledBox>

                        </StyledBox>
                    </Grid>

                    <Grid item md={6}>
                        <StyledBox>
                            
                        </StyledBox>
                    </Grid>
                  </Grid>
                </Container>
            </StyledProject>
        </>
    )
}