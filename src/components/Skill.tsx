import {Box, Tooltip} from "@mui/material";
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
        <Box sx={{minWidth: '5rem'}}>
            <SkillTitle>{ props.skill }&nbsp;</SkillTitle>
        </Box>
        <Box sx={{width: '100%', mr: 1, ml: '2rem'}}>
            <Tooltip title={props.experienceYears + ' years'} placement="top">
                <span>
                    <SkillMeter variant="determinate" value={props.experienceYears * 10}/>
                    <span style={{color: `${PRIMARY_TEXT_COLOR}`, marginLeft: '22rem', fontSize: '10px'}}>10 years</span>
                </span>
            </Tooltip>
        </Box>
    </SkillWrapper>
}