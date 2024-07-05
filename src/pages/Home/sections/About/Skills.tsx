import { Box, Container, Grid, Typography, styled } from "@mui/material"
import { SectionTitle } from "../../../../components/SectionTitle";


export function Skills(){

    const StyledSkillMain = styled("div")(()=>({
        height: "100%",
        marginTop: "20px",
        marginBottom: "20px",
        '@media (max-width: 600px)': {
            height: "auto",
            marginBottom: "20px"
        }
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
            <StyledSkillMain>
                <Container maxWidth="lg">
                <SectionTitle color={"black"}>Skills</SectionTitle>
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
            </StyledSkillMain>
        </>
    )
}