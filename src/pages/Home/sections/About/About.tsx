import { Box, Container, Grid, Typography, styled } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { SectionTitle } from "../../../../components/SectionTitle";

export function About(){

    const StyledAbout = styled("div")(()=>({
        height: "100%",
        marginTop: "20px",
        marginBottom: "20px",
        '@media (max-width: 600px)': {
            height: "auto",
            marginBottom: "20px"
        }
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
                    <SectionTitle color={"black"}>About me</SectionTitle>
                    <Grid container display="flex" justifyContent="center" alignItems="center" spacing={3}>
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

                    <p style={{ textAlign: "center", lineHeight: '1.5' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eligendi officiis eius facilis dolorum perspiciatis eos. Autem provident cupiditate in, amet quod sunt ut dicta exercitationem aliquam eum repellendus neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta libero in vitae, provident nemo dolores, cum voluptatum minus veniam rem atque tempora ex optio officia vero nobis reprehenderit quibusdam architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi corrupti, iste animi pariatur accusamus facere veniam et tempore incidunt ipsum harum assumenda magnam dolorem cum qui quae natus rerum deleniti.</p>
                    <hr />
                </Container>
            </StyledAbout>
        </>
    )
}