import {Box, LinearProgress, styled, Typography} from "@mui/material";
import {PRIMARY_TEXT_COLOR, SECONDARY_BG_COLOR, SECONDARY_TEXT_COLOR} from "../utils/contatns";

export const ExperienceAndSkillsDiv = styled(Box)`
  && {
    background-color: ${SECONDARY_BG_COLOR};
  }
`

/**
 * Experience
 */

export const ExperienceWrapper = styled(Box)`
    && {
      background-color: ${SECONDARY_BG_COLOR};
    }
`

export const ExperienceTitleWrapper = styled(Typography)(({ theme }) => ({
    backgroundColor: `${SECONDARY_BG_COLOR}`,
    color: `${SECONDARY_TEXT_COLOR}`,
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
}))

/**
 * Skills
 */
export const SkillsTitleWrapper = styled(Typography)(({ theme }) => ({
    color: `${PRIMARY_TEXT_COLOR}`,
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
}))

export const SkillsWrapper = styled(Box)`
    && {
      max-width: 35rem;
      height: 20rem;
    }
`

export const SkillTitle = styled(Typography)`
  && {
    color: ${PRIMARY_TEXT_COLOR};
    padding: 1rem 1rem 1rem 1.3rem;
  }
`

export const SkillMeter = styled(LinearProgress)`
    && {
      height: 10px;
      border-radius: 5px;
      max-width: 25rem;
      margin-top: 1rem;
    }
`