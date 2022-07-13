import {JobCardWrapper} from "./JobCard.style";
import {CardContent, Typography} from "@mui/material";
import React from "react";

type JobCardProps = {
    company: string
    location: string
    role: string
}

export const JobCard = (jobCardProps: JobCardProps) => {
    return <JobCardWrapper sx={{ minWidth: 209 }} elevation={4}>
        <CardContent>
            <Typography variant="h5">
                { jobCardProps.company }
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                { jobCardProps.location }
            </Typography>
            <Typography variant="body2">
                { jobCardProps.role }
            </Typography>
        </CardContent>
    </JobCardWrapper>
}