import { Box, Container, Link, Typography, styled } from "@mui/material";
import { StyledButton } from "./StyledButton/StyledButton";
import { BtnDisable } from "./BtnDisable";

type ProjectProps = {
  title: string;
  urlImage: string;
  description: string;
  techs: string;
  codeUrl?: string;
  projectUrl?: string;
};

export default function Project({
  title,
  urlImage,
  description,
  techs,
  projectUrl,
  codeUrl,
}: ProjectProps) {
  const StyledBox = styled(Box)(() => ({
    border: "2px solid rgba(211,211,211,0.2)",
    height: "auto",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "4px",
    "@media (max-width: 600px)": {
      height: "auto",
      padding: "10px",
    },
    "@media (max-height: 900px)": {
      height: "90vh",
    },
    "&:hover": {
      backgroundColor: "#5e5e5e",
    },
  }));

  const StyledTypograph = styled(Typography)(() => ({
    color: "white",
  }));

  return (
    <>
      <StyledBox>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box width="100%" display="flex">
            <StyledTypograph variant="h4">{title}</StyledTypograph>
          </Box>
          <Box
            minHeight="415px"
            height="100%"
            alignSelf="center"
            overflow="hidden"
          >
            <img
              src={urlImage}
              width="100%"
              alt={`Imagem do projeto ${title}`}
            />
          </Box>
          <>
            <StyledTypograph textAlign="start">{description}</StyledTypograph>
            <StyledTypograph paddingY={2} fontWeight="bold" textAlign="start">
              Techs: {techs}
            </StyledTypograph>
            <Box display="flex" gap={2}>
              {projectUrl ? (
                <Link width="100%" href={projectUrl} target="_blank">
                  <StyledButton>Ver Projeto</StyledButton>
                </Link>
              ) : (
                <Box style={{ width: "100%" }}>
                  <BtnDisable disabled={true}>Ver Projeto</BtnDisable>
                </Box>
              )}

              <Link width="100%" href={codeUrl} target="_blank">
                <StyledButton>Ver Código</StyledButton>
              </Link>
            </Box>
          </>
        </Container>
      </StyledBox>
    </>
  );
}
