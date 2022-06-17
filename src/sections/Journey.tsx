import {JourneyDiv, JourneyTitleWrapper, VerticalLine} from "./Journey.style";
import {Grid, Toolbar} from "@mui/material";
import React from "react";
import {BoxPadding} from "../App.style";
import {JobRow} from "../components/JobRow";

export const Journey = () => {
    return <JourneyDiv>
        <BoxPadding />
        <JourneyTitleWrapper>Journey</JourneyTitleWrapper>
        <Toolbar/>
        <Grid container direction={'row'} justifyContent={'center'} alignItems="center">
            <JobRow />
            <Grid item>
                <VerticalLine />
            </Grid>
            <JobRow />
        </Grid>
        <Toolbar/>
    </JourneyDiv>
}