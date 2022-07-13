import {AppBar, Typography, styled, Box} from "@mui/material";
import {PRIMARY_BG_COLOR, PRIMARY_TEXT_COLOR} from "./utils/contatns";

export const AppBarWrapper = styled(AppBar)`
  && {
    background-color: ${PRIMARY_BG_COLOR};
  }
`

export const TypographyWrapper = styled(Typography)(({ theme }) => ({
    color: `${PRIMARY_TEXT_COLOR}`,
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
    }
}))

export const BoxPadding = styled(Box)`
    && {
      padding: 1rem;
    }
`

export const BoxSpace = styled(Box)`
    && {
      margin: 1rem;
      padding: 1rem;
    }
`