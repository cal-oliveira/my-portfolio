import { Typography, TypographyProps } from "@mui/material";

type SectionTitleProps = TypographyProps & {
    children: string
}

export function SectionTitle({children, ...TypographyProps}: SectionTitleProps){
    return(
        <Typography variant="h2" textAlign="center" {...TypographyProps}>{children}</Typography>
    )
}