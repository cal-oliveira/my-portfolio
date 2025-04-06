import { Box, Container, Grid, Typography, styled } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { SectionTitle } from "../../../../components/SectionTitle";
import { motion } from "framer-motion";

export function About() {
  const StyledAbout = styled("div")(() => ({
    height: "100%",
    overflow: "hidden",
    marginTop: "20px",
    marginBottom: "20px",
    "@media (max-width: 600px)": {
      height: "auto",
      marginBottom: "20px",
    },
  }));

  const StyledBox = styled(Box)(() => ({
    boxShadow: "0px 0px 15px -3px rgba(0,0,0,0.3)",
    height: "15vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
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
      <StyledAbout>
        <Container maxWidth="lg">
          <SectionTitle color={"black"}>About me</SectionTitle>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={9} md={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.2 }}
                variants={boxVariantsLeft}
              >
                <StyledBox>
                  <SchoolIcon />
                  <Typography fontWeight="bold" fontSize={18}>
                    Acadêmico
                  </Typography>
                  <p style={{ lineHeight: 1 }}>
                    Graduando em Análise e desenvolvimento de sistemas
                  </p>
                </StyledBox>
              </motion.div>
            </Grid>

            <Grid item xs={9} md={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.2 }}
                variants={boxVariantsRight}
              >
                <StyledBox>
                  <WorkspacePremiumIcon />
                  <Typography fontWeight="bold" fontSize={18}>
                    Experiência
                  </Typography>
                  <p style={{ lineHeight: 1 }}>
                    Estágio de Desenvolvedor Front End na AVANTI.
                  </p>
                </StyledBox>
              </motion.div>
            </Grid>
          </Grid>

          <p style={{ textAlign: "center", lineHeight: "1.5" }}>
            Fascinado pela magia que as tecnologias nos proporcionam e obstinado
            a chegar cada vez mais longe <br />
            Estudo programção de forma resiliente e estou em busca de
            experiências que me levem ao próximo nível🚀
          </p>
          <hr />
        </Container>
      </StyledAbout>
    </>
  );
}
