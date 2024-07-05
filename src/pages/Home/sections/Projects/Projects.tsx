import { Container, Grid, styled } from "@mui/material"
import Project from "../../../../components/Project"
import { SectionTitle } from "../../../../components/SectionTitle"
import { motion } from "framer-motion"

export function Projects(){

    const StyledProject = styled("div")(({ theme })=>({
        backgroundColor: theme.palette.primary.main,
        height: "auto",
        paddingBottom: 35,
        '@media (max-width: 600px)': {
            height: "auto",
        }
    }))

    const boxVariantsLeft = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 }
    }

    const boxVariantsRight = {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 }
    }

    return(
        <>
            <StyledProject>
                <Container>
                  <SectionTitle color={"white"}>Projects</SectionTitle>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.2 }}
                            variants={boxVariantsLeft}
                        >
                            <Project 
                                title="Cronômetro"
                                urlImage="https://github.com/cal-oliveira/Cronometro/blob/main/screenshots/img--1.png?raw=true"
                                description="Cronômetro desenvolvido com HTML, CSS e JS Design responsivo e otimizado para dispositivos móveis. Projeto hospedado no github pages"
                                techs="JavaScript, HTML, CSS"
                            />
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.2 }}
                            variants={boxVariantsRight}
                        >
                            <Project 
                                title="PokeNext"
                                urlImage="https://github.com/cal-oliveira/pokenext/blob/master/screenshots/pokenext.png?raw=true"
                                description="Pokedex desenvolvido com NextJs e hospedado na Vercel"
                                techs="React, Next"
                            />
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.2 }}
                            variants={boxVariantsLeft}
                        >
                            <Project 
                                title="Cronômetro"
                                urlImage="https://raw.githubusercontent.com/cal-oliveira/home-nubank-mobile/master/screenshots/screenshot-1.png"
                                description="Cronômetro desenvolvido com HTML, CSS e JS Design responsivo e otimizado para dispositivos móveis. Projeto hospedado no github pages"
                                techs="JavaScript, HTML, CSS"
                            />
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.2 }}
                            variants={boxVariantsRight}
                        >
                            <Project 
                                title="PokeNext"
                                urlImage="https://github.com/cal-oliveira/pokenext/blob/master/screenshots/pokenext.png?raw=true"
                                description="Pokedex desenvolvido com NextJs e hospedado na Vercel"
                                techs="JavaScript, HTML, CSS"
                            />
                        </motion.div>
                    </Grid>
                  </Grid>
                </Container>
            </StyledProject>
        </>
    )
}