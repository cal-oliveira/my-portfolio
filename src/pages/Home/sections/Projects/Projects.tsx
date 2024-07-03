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

    const StyledP = styled("p")(()=>({
        color: "white",
        textAlign: "start"
    }))

    return(
        <>
            <StyledProject>
                <Container>
                  <Typography color={"white"} variant="h2" textAlign="center" >Projects</Typography>

                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <StyledBox>
                            <Typography color={"white"} fontSize={28}>Cronômetro</Typography>
                            <img src="https://github.com/cal-oliveira/Cronometro/blob/main/screenshots/img--1.png?raw=true" width="100%" alt="" />
                            <StyledP>Cronômetro desenvolvido com HTML, CSS e JS <br /> Design responsivo e otimizado para dispositivos móveis. <br />Projeto hospedado no github pages</StyledP>
                        </StyledBox>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <StyledBox>
                            <Typography color={"white"} fontSize={28}>Snake</Typography>
                            <img src="" alt="" />
                        </StyledBox>
                    </Grid>
                  </Grid>
                </Container>
            </StyledProject>
        </>
    )
}