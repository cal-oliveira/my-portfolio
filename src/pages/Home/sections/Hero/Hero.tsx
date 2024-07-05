import { Box, Container, Grid, Link, Typography, styled } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { StyledButton } from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackGround";

export function Hero(){

    const StyledHero = styled("div")(({ theme })=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }))

    const StyledImg = styled("img")(({ theme })=>({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    // funcão para enviar email ao clicar em "contact me"
    function mailTo(){
        let link = "mailto:calebe81899026@gmail.com"
        window.location.href = link
    }

    //link para baixar o curriculo
    let linkcv = "https://drive.google.com/uc?export=download&id=1GW1FVuRe5OkOkvzqWUZlmAUzT0rRHvrd"

    return(
        <>
            <StyledHero>

                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position='relative'>
                                <Box position="absolute" width="150%" top={-160} right={-80}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src="https://github.com/cal-oliveira.png" alt="Foto do developer" />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Typography color={"primary.contrastText"} variant="h1" textAlign="center" pb={2}>Calebe Oliveira</Typography>
                            <Typography color={"primary.contrastText"} variant="h2" textAlign="center">I am a Web and Mobile Developer</Typography>

                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Link width="100%" href={linkcv} download>
                                        <StyledButton>
                                            <DownloadIcon />
                                            <Typography>Download CV</Typography>
                                        </StyledButton>
                                    </Link>
                                </Grid>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={mailTo}>
                                        <EmailIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </StyledHero>
        </>
    )
}