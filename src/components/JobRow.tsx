import {Grid, Typography} from "@mui/material";
import {RadioButtonChecked} from "@mui/icons-material";
import {JobCard} from "./JobCard";
import React from "react";
import {HorizontalLine} from "./JobRow.style";

export const JobRow = () => {
    return <Grid container direction={'row'} justifyContent={'center'} alignItems="center">
        <Grid item xs={2}>
            <Typography variant="h6">
                April 2021 - present
            </Typography>
        </Grid>
        <Grid item xs={1}>
            <HorizontalLine />
        </Grid>
        <Grid item>
            <RadioButtonChecked fontSize={'large'} />
        </Grid>
        <Grid item xs={1}>
            <HorizontalLine />
        </Grid>
        <Grid item xs={3}>
            <JobCard company={'Swappie Oy'} location={'Helsinki, Finland'} role={'Software Engineer: Full-stack developer'}/>
        </Grid>
    </Grid>
}