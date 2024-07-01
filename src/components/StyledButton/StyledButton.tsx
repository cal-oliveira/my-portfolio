import { styled } from "@mui/material"
import { ReactNode } from "react"


export function StyledButton({ children }: {children: ReactNode}){

    const StyledButton = styled("button")(({ theme })=>({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        color: theme.palette.primary.contrastText,
        '&hover': {
            backgroundcolor: theme.palette.secondary.light
        }
    }))


    return(
        <StyledButton>{children}</StyledButton>
    )
}