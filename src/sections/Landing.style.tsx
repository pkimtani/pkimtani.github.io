import {Box, IconButton, styled, Typography} from "@mui/material";
import {PRIMARY_TEXT_COLOR} from "../utils/contatns";

export const LandingDiv = styled(Box)``

export const BoxMargin = styled(Box)`
    && {
      margin: 1rem;
    }
`

export const FullStackDeveloperWrapper = styled(Typography)(({ theme }) => ({
    color: `${PRIMARY_TEXT_COLOR}`,
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
    color: `${PRIMARY_TEXT_COLOR}`,
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: "1.25rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
    },
}))

export const IOTEnthusiastWrapper = styled(Typography)(({ theme }) => ({
    color: `${PRIMARY_TEXT_COLOR}`,
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: "1.25rem",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "2rem",
    },
}))

export const GithubIconWrapper = styled(IconButton)(({ theme }) => ({
    color: `${PRIMARY_TEXT_COLOR}`,
    [theme.breakpoints.down('sm')]: {
        fontSize: "1rem",
        size: 'small'
    },
}))