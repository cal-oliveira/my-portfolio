import { Box, Container, Grid, Typography, styled } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export function About(){

    const StyledAbout = styled("div")(({ theme })=>({
        height: "60vh",
        marginTop: "50px"
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
            <StyledAbout>
                <Container maxWidth="lg">
                    <Typography color={"black"} variant="h2" textAlign="center">About me</Typography>
                    <Grid container display="flex" justifyContent="center" alignItems="center" spacing={3} mt={2}>
                        <Grid item xs={9} md={4} >
                            <StyledBox>
                                <SchoolIcon />
                                <Typography fontWeight="bold" fontSize={18}>Acadêmico</Typography>
                                <p style={{ lineHeight: 1 }}>Graduando em Análise e desenvolvimento de sistemas</p>
                            </StyledBox>
                            
                        </Grid>

                        <Grid item xs={9} md={4} >
                            <StyledBox>
                                <WorkspacePremiumIcon />
                                <Typography fontWeight="bold" fontSize={18}>Experiência</Typography>
                                <p>Em busca da minha primeira experiência profissional</p>
                            </StyledBox>
                        </Grid>
                    </Grid>
                </Container>
            </StyledAbout>
        </>
    )
}