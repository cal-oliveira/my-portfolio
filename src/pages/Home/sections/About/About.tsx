import { Box, Container, Grid, Typography, styled } from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export function About(){

    const StyledAbout = styled("div")(()=>({
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

    const StyledSkill = styled(Box)(()=>({
        height: "3vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        border: "1px solid rgba(0,0,0,0.2)"
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

                    <p style={{ textAlign: "center", lineHeight: '1.5' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eligendi officiis eius facilis dolorum perspiciatis eos. Autem provident cupiditate in, amet quod sunt ut dicta exercitationem aliquam eum repellendus neque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta libero in vitae, provident nemo dolores, cum voluptatum minus veniam rem atque tempora ex optio officia vero nobis reprehenderit quibusdam architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi corrupti, iste animi pariatur accusamus facere veniam et tempore incidunt ipsum harum assumenda magnam dolorem cum qui quae natus rerum deleniti.</p>
                    <hr />

                    <Typography color={"black"} variant="h2" textAlign="center">Skills</Typography>
                    <Grid container display="flex" justifyContent="center" alignItems="center" spacing={2}> 
                        <Grid item xs={4} md={2}>
                            <StyledSkill>
                                <Typography fontWeight="500">JavaScript</Typography>
                            </StyledSkill>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <StyledSkill>
                                <Typography fontWeight="500">TypeScript</Typography>
                            </StyledSkill>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <StyledSkill>
                                <Typography fontWeight="500">React</Typography>
                            </StyledSkill>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <StyledSkill>
                                <Typography fontWeight="500">React Native</Typography>
                            </StyledSkill>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <StyledSkill>
                                <Typography fontWeight="500">HTML</Typography>
                            </StyledSkill>
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <StyledSkill>
                                <Typography fontWeight="500">CSS</Typography>
                            </StyledSkill>
                        </Grid>
                    </Grid>

                </Container>
            </StyledAbout>
        </>
    )
}