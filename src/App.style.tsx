import {AppBar, Typography, styled} from "@mui/material";
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