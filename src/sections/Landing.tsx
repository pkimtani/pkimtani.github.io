import React from "react";
import {CardMedia, Container, Grid, Stack, Toolbar} from "@mui/material";
import {GitHub, LinkedIn, PinDrop} from "@mui/icons-material";
import {
    BoxMargin,
    FullStackDeveloperWrapper, IconButtonWrapper,
    IOTEnthusiastWrapper,
    LandingDiv,
    MobileDeveloperWrapper,
} from "./Landing.style";
import {BoxSpace} from "../App.style";

export const Landing = () => {
    return <LandingDiv>
        <Container>
            <Toolbar/>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <CardMedia sx={{ width: { xs: 1, sm: 0.9, md: 0.9 } }} component="img" image={"profile_pic.png"} alt="profile pic"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <BoxSpace sx={{ display: { xs: 'none', sm: 'block' } }}/>
                    <Stack spacing={6}>
                        <FullStackDeveloperWrapper variant={"h6"}>
                            Full-stack web developer
                        </FullStackDeveloperWrapper>
                        <Stack>
                            <MobileDeveloperWrapper variant={"h6"}>
                                Mobile application developer
                            </MobileDeveloperWrapper>
                            <IOTEnthusiastWrapper variant={"h6"}>
                                I.O.T. enthusiast
                            </IOTEnthusiastWrapper>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <BoxMargin  sx={{ display: { xs: 'block', sm: 'none' } }}/>
            <Grid container sx={{ justifyContent: { xs: 'none', sm: 'space-evenly' } }}>
                <Grid item xs={2} sm={2}>
                    <a href='https://github.com/pkimtani' target='_blank' rel="noreferrer">
                        <IconButtonWrapper aria-label="github">
                            <GitHub/>&nbsp;pkimtani
                        </IconButtonWrapper>
                    </a>
                </Grid>
                <Grid item xs={2} sx={{ display: { xs: 'block', sm: 'none' } }}/>
                <Grid item xs={2} sm={2}>
                    <a href='https://www.linkedin.com/in/pkimtani' target='_blank' rel="noreferrer">
                        <IconButtonWrapper aria-label="github">
                            <LinkedIn/>&nbsp;pkimtani
                        </IconButtonWrapper>
                    </a>
                </Grid>
                <Grid item xs={2} sx={{ display: { xs: 'block', sm: 'none' } }}/>
                <Grid item xs={2} sm={2}>
                    <IconButtonWrapper aria-label="github">
                        <PinDrop/>&nbsp;Helsinki
                    </IconButtonWrapper>
                </Grid>
            </Grid>
            <Toolbar/>
        </Container>
    </LandingDiv>
}