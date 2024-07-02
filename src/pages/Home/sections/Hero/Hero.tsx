import { Box, Container, Grid, Typography, styled } from "@mui/material"
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
                                    <StyledImg src="https://github.com/cal-oliveira.png" alt="" />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Typography color={"primary.contrastText"} variant="h1" textAlign="center" pb={2}>Calebe Oliveira</Typography>
                            <Typography color={"primary.contrastText"} variant="h2" textAlign="center">I am a Web and Mobile Developer</Typography>

                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={()=>console.log('download')}>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={()=>console.log('contact me')}>
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