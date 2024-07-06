import { styled } from "@mui/material"
import { ReactNode, ButtonHTMLAttributes  } from "react"

type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode,
    onClick?: () => void
}

export function BtnDisable({ children, onClick, ...props }: StyledButtonProps){

    const StyledButton = styled("button")(({ theme })=>({
        backgroundColor: "transparent",
        border: `1px solid rgba(211,211,211,0.2)`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: "rgba(211,211,211,0.2)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
    }))

    return(
        <StyledButton {...props} onClick={onClick}>{children}</StyledButton>
    )
}