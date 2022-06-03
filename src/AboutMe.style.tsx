import {Box, styled, Typography} from "@mui/material";

export const AboutMeDiv = styled(Box)`
  && {
    background-color: #C4ECEB;
  }
`

export const BoxPadding = styled(Box)`
    && {
      padding: 1rem;
    }
`

export const AboutMeTitleWrapper = styled(Typography)(({ theme }) => ({
    color: "#293B3F",
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
}))

export const AboutMeContentWrapper = styled(Typography)(({ theme }) => ({
    color: "#293B3F",
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