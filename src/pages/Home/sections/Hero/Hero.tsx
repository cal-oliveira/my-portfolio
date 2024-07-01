import { Button, Container, Grid, Typography, styled } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

export function Hero(){

    const StyledHero = styled("div")(()=>({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=>({
        width: "100%",
        borderRadius: "50%"
    }))

    return(
        <>
            <StyledHero>

                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src="https://github.com/cal-oliveira.png" alt="" />
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Typography color={"gray"} variant="h1" textAlign="center">Calebe Oliveira</Typography>
                            <Typography color={"gray"} variant="h2" textAlign="center">I am a Web and Mobile Developer</Typography>

                            <Grid container display="flex" justifyContent="center">
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <DownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <EmailIcon />
                                        Contact me
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </StyledHero>
        </>
    )
}