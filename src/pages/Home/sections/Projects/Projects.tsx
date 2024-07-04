import { Container, Grid, styled } from "@mui/material"
import Project from "../../../../components/Project"
import { SectionTitle } from "../../../../components/SectionTitle"

export function Projects(){

    const StyledProject = styled("div")(({ theme })=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        '@media (max-width: 600px)': {
            height: "auto",
        }
    }))

    /* const StyledBox = styled(Box)(()=>({
        border: "2px solid rgba(211,211,211,0.2)",
        height: "50vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        borderRadius: "4px"
    })) */

    return(
        <>
            <StyledProject>
                <Container>
                  <SectionTitle color={"white"}>Projects</SectionTitle>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Project 
                            title="Cronômetro"
                            urlImage="https://github.com/cal-oliveira/Cronometro/blob/main/screenshots/img--1.png?raw=true"
                            description="Cronômetro desenvolvido com HTML, CSS e JS Design responsivo e otimizado para dispositivos móveis. Projeto hospedado no github pages"
                            techs="JavaScript, HTML, CSS"
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Project 
                            title="PokeNext"
                            urlImage="https://github.com/cal-oliveira/pokenext/blob/master/screenshots/pokenext.png?raw=true"
                            description="Pokedex desenvolvido com NextJs e hospedado na Vercel"
                            techs="JavaScript, HTML, CSS"
                            
                        />
                    </Grid>
                  </Grid>
                </Container>
            </StyledProject>
        </>
    )
}