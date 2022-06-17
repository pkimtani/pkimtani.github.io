import {Box, styled, Typography} from "@mui/material";
import {SECONDARY_BG_COLOR, SECONDARY_TEXT_COLOR} from "../utils/contatns";

export const JourneyDiv = styled(Box)`
  && {
    background-color: ${SECONDARY_BG_COLOR};
  }
`
export const JourneyTitleWrapper = styled(Typography)(({ theme }) => ({
    color: `${SECONDARY_TEXT_COLOR}`,
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    }
}))

export const VerticalLine = styled("hr") `
    && {
      width: 30px;
      transform: rotate(90deg);
    }
`