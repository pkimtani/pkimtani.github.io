import {Box, IconButton, styled, Typography} from "@mui/material";

export const LandingDiv = styled(Box)`
  && {
    background-color: #293b3e;
  }
`

export const BoxSpace = styled(Box)`
    && {
      margin: 1rem;
      padding: 1rem;
    }
`

export const BoxMargin = styled(Box)`
    && {
      margin: 1rem;
    }
`

export const FullStackDeveloperWrapper = styled(Typography)(({ theme }) => ({
    color: "#C4ECEB",
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "3rem",
    },
}))

export const MobileDeveloperWrapper = styled(Typography)(({ theme }) => ({
    color: "#C4ECEB",
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: "1.25rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
    },
}))

export const IOTEnthusiastWrapper = styled(Typography)(({ theme }) => ({
    color: "#C4ECEB",
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: "1.25rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
    },
}))

export const GithubIconWrapper = styled(IconButton)(({ theme }) => ({
    color: "#C4ECEB",
    [theme.breakpoints.down('sm')]: {
        fontSize: "1rem",
        size: 'small'
    },
}))