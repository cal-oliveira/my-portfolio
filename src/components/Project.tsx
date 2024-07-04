import { Box, Container, Typography, styled } from "@mui/material"
import { StyledButton } from "./StyledButton/StyledButton"

type ProjectProps = {
    title: string,
    urlImage: string,
    description: string,
    techs: string,
    codeUrl?: string,
    porjectUrl?: string
}

export default function Project({ title, urlImage, description, techs, porjectUrl, codeUrl }: ProjectProps){

    const StyledBox = styled(Box)(()=>({
        border: "2px solid rgba(211,211,211,0.2)",
        height: "50vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        borderRadius: "4px",
        '@media (max-width: 600px)': {
            height: "auto",
            padding: "10px"
        }
    }))

    const StyledTypograph = styled(Typography)(()=>({
        color:"white"
    }))

    return(
        <>
            <StyledBox>
                <Container>
                    <Box width="100%" display="flex">
                        <StyledTypograph variant="h4">{title}</StyledTypograph>
                    </Box>
                    <img src={urlImage} width="100%" alt={`Imagem do projeto ${title}`} />
                    <StyledTypograph textAlign="start">{description}</StyledTypograph>
                    <StyledTypograph paddingY={2} fontWeight="bold" textAlign="start">Techs: {techs}</StyledTypograph>
                    <Box display="flex" gap={2}>
                        <StyledButton onClick={()=>{}}>Ver Projeto</StyledButton>
                        <StyledButton onClick={()=>{}}>Ver Código</StyledButton>
                    </Box>
                </Container>
            </StyledBox>
        </>
    )
}