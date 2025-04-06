import { Container, Grid, styled } from "@mui/material";
import Project from "../../../../components/Project";
import { SectionTitle } from "../../../../components/SectionTitle";
import { motion } from "framer-motion";

export function Projects() {
  const StyledProject = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "auto",
    overflow: "hidden",
    paddingBottom: 35,
    "@media (max-width: 600px)": {
      height: "auto",
    },
  }));

  const boxVariantsLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const boxVariantsRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <StyledProject>
        <Container>
          <SectionTitle color={"white"}>Projects</SectionTitle>
          <Grid container spacing={4} gap={10}>
            <Grid item xs={12} lg={12}>
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
                  description="Cronômetro desenvolvido com HTML, CSS e JS. Design responsivo e otimizado para dispositivos móveis. Projeto hospedado no github pages"
                  techs="JavaScript, HTML, CSS"
                  codeUrl="https://github.com/cal-oliveira/Cronometro"
                  projectUrl="https://cal-oliveira.github.io/Cronometro/"
                />
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={12}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.2 }}
                variants={boxVariantsRight}
              >
                <Project
                  title="PokeNext"
                  urlImage="https://github.com/cal-oliveira/my-portfolio/blob/main/screenshots/pokedexDemo.gif?raw=true"
                  description="Poke-Agenda com mais de 400 pokemons catalogados. Projeto desenvolvido com NextJs, utilizando pokeAPI e atualmente hospedado na Vercel."
                  techs="React, Next"
                  codeUrl="https://github.com/cal-oliveira/pokenext"
                  projectUrl="https://pokenext-gold.vercel.app/"
                />
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={12}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.2 }}
                variants={boxVariantsLeft}
              >
                <Project
                  title="Home Nubank - Mobile"
                  urlImage="https://github.com/cal-oliveira/home-nubank-mobile/blob/master/screenshots/screenshot-3.png?raw=true"
                  description="Interface home do app mobile Nubank baseado no projeto conceito 2021(community)"
                  techs="React Native, Native-Base, TypeScript, Expo"
                  codeUrl="https://github.com/cal-oliveira/home-nubank-mobile"
                />
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={12}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.2 }}
                variants={boxVariantsRight}
              >
                <Project
                  title="Snake - Mobile"
                  urlImage="https://github.com/cal-oliveira/snake-game-React-Native/blob/main/screenshots/game%20snake%20(online-video-cutter.com).gif?raw=true"
                  description="O clássico jogo da cobrinha (snake) para dispositivos móveis."
                  techs="React Native, TypeScript, Expo"
                  codeUrl="https://github.com/cal-oliveira/snake-game-React-Native"
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </StyledProject>
    </>
  );
}
