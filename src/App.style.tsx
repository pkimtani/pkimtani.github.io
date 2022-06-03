import {AppBar, Typography, styled} from "@mui/material";

export const AppBarWrapper = styled(AppBar)`
  && {
    background-color: #293b3e;
  }
`

export const TypographyWrapper = styled(Typography)(({ theme }) => ({
    color: "#C4ECEB",
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
    }
}))