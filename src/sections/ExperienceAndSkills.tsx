import {
    ExperienceAndSkillsDiv,
    ExperienceTitleWrapper,
    ExperienceWrapper,
    SkillsTitleWrapper,
} from "./ExperienceAndSkills.style";
import {BoxPadding} from "../App.style";
import React from "react";
import {Card, CardContent, Grid} from "@mui/material";
import {Timeline,} from "@mui/lab";
import {PRIMARY_BG_COLOR} from "../utils/contatns";
import {ExperienceTimelineItem} from "../components/ExperienceTimelineItem";
import {Skill} from "../components/Skill";

export const ExperienceAndSkills = () => {
    return <ExperienceAndSkillsDiv>
        <BoxPadding/>
        <Grid container direction={'row'} justifyContent={'flex-start'} alignItems="start">
            <Grid item xs={12} md={6}>
                <ExperienceTitleWrapper>Experience</ExperienceTitleWrapper>
                <ExperienceWrapper>
                    <Timeline>
                        <ExperienceTimelineItem
                            start={'October 2022'}
                            end={'present'}
                            company={'Wunderdog Oy'}
                            location={'Helsinki, Finland'}
                            role={'Sr. Technology Consultant'}
                        />
                        <ExperienceTimelineItem
                            start={'April 2021'}
                            end={'August 2022'}
                            company={'Swappie Oy'}
                            location={'Helsinki, Finland'}
                            role={'Software Engineer: Full-stack developer'}
                        />
                        <ExperienceTimelineItem
                            start={'July 2019'}
                            end={'March 2021'}
                            company={'Enevo Oy'}
                            location={'Espoo, Finland'}
                            role={'Software Engineer: Full-stack developer'}
                        />
                        <ExperienceTimelineItem
                            start={'October 2017'}
                            end={'March 2019'}
                            company={'Revving Tech. Pvt. Ltd.'}
                            location={'Bangalore, India'}
                            role={'Sr. Software Engineer: Full-stack developer'}
                        />
                        <ExperienceTimelineItem
                            start={'July 2016'}
                            end={'October 2017'}
                            company={'MintM Media Pvt. Ltd.'}
                            location={'Bangalore, India'}
                            role={'Software Engineer: Full-stack developer'}
                        />
                    </Timeline>
                </ExperienceWrapper>
            </Grid>
            <Grid item xs={12} md={1}/>
            <Grid item xs={12} md={5}>
                <Card raised={true} sx={{backgroundColor: `${PRIMARY_BG_COLOR}`, borderRadius: {xs: '5px', md: '20px 0 0 20px'}}}>
                    <CardContent>
                        <SkillsTitleWrapper>Skills</SkillsTitleWrapper>
                        <Skill skill={'PHP'} experienceYears={5}/>
                        <Skill skill={'NodeJS'} experienceYears={3}/>
                        <Skill skill={'ReactJS'} experienceYears={2}/>
                        <Skill skill={'Angular'} experienceYears={1}/>
                        <Skill skill={'VueJS'} experienceYears={1}/>
                        <Skill skill={'MySQL'} experienceYears={5}/>
                        <Skill skill={'Postgres'} experienceYears={1}/>
                        <Skill skill={'Docker'} experienceYears={3}/>
                        <Skill skill={'GCP'} experienceYears={2}/>
                        <Skill skill={'AWS'} experienceYears={1}/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ExperienceAndSkillsDiv>
}