import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {JobCard} from "./JobCard";
import React from "react";

type ExperienceTimelineItemProps = {
    start: string
    end: string
    company: string
    location: string
    role: string
}

export const ExperienceTimelineItem = (props: ExperienceTimelineItemProps) => {
    return <TimelineItem>
        <TimelineOppositeContent sx={{m: 'auto 0'}}>
            { props.start } - { props.end }
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineConnector/>
            <TimelineDot/>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{py: '24px', px: 2}}>
            <JobCard company={props.company} location={props.location} role={props.role}/>
        </TimelineContent>
    </TimelineItem>
}