import { Email, GitHub, LinkedIn } from "@mui/icons-material"
import { Box, Link, styled, Typography } from "@mui/material"

export function Footer(){

    const StyledFooter = styled("div")(()=>({
        backgroundColor: "#d3d3d3",
        height: "8vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5
    }))

    return(
        <>
            <StyledFooter>
                <Box display="flex" justifyContent="space-between" width="25%">
                    <Link href="https://github.com/cal-oliveira" target="_blank">
                        <GitHub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/calebe-oliveira-615948258/" target="_blank">
                        <LinkedIn />
                    </Link>
                    <Link href="mailto:calebe81899026@gmail.com" target="_blank">
                        <Email />
                    </Link>
                </Box>
                <Typography>© 2024 Calebe Oliveira - All rights reserved</Typography>
            </StyledFooter>
        </>
    )
}