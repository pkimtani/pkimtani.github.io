import {Box, Grid} from "@mui/material";
import {SkillMeter, SkillTitle} from "../sections/ExperienceAndSkills.style";
import {PRIMARY_TEXT_COLOR} from "../utils/contatns";
import React from "react";
import {SkillWrapper} from "./Skill.style";

type SkillProps = {
    skill: string
    experienceYears: number
}

export const Skill = (props: SkillProps) => {
    return <SkillWrapper>
        <Grid direction={"row"} container>
            <Grid item xs={3}>
                <Box>
                    <SkillTitle>{props.skill}&nbsp;</SkillTitle>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <Box sx={{width: '100%'}}>
                    <Grid direction={"row"} container>
                        <Grid item xs={8} sx={{ paddingTop: '0.5rem' }}>
                            <SkillMeter variant="determinate" value={props.experienceYears * 10}/>
                        </Grid>
                        <Grid item xs={2} sx={{ paddingTop: '1rem', ml: 1 }}>
                            <span style={{
                                color: `${PRIMARY_TEXT_COLOR}`,
                                fontSize: '10px',
                                marginTop: '1rem',
                            }}>{props.experienceYears} years</span>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </SkillWrapper>
}