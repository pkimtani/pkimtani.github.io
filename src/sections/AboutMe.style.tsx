import {Box, styled, Typography} from "@mui/material";
import {SECONDARY_BG_COLOR, SECONDARY_TEXT_COLOR} from "../utils/contatns";

export const AboutMeDiv = styled(Box)`
  && {
    background-color: ${SECONDARY_BG_COLOR};
  }
`

export const BoxPadding = styled(Box)`
    && {
      padding: 1rem;
    }
`

export const AboutMeTitleWrapper = styled(Typography)(({ theme }) => ({
    color: `${SECONDARY_TEXT_COLOR}`,
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
}))

export const AboutMeContentWrapper = styled(Typography)(({ theme }) => ({
    color: `${SECONDARY_TEXT_COLOR}`,
    textAlign: 'justify',
    fontSize: '1rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
    },
}))