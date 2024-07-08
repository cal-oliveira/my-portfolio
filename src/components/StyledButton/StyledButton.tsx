import { styled } from "@mui/material"
import { ReactNode, ButtonHTMLAttributes  } from "react"

type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode,
    onClick?: () => void
}

export function StyledButton({ children, onClick, ...props }: StyledButtonProps){

    const StyledButton = styled("button")(({ theme })=>({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: "#9400d3"
        }
    }))

    return(
        <StyledButton {...props} onClick={onClick}>{children}</StyledButton>
    )
}