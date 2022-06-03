import React from "react";
import {CardMedia, Container, Grid, Stack, Toolbar} from "@mui/material";
import {
    BoxSpace,
    FullStackDeveloperWrapper,
    IOTEnthusiastWrapper,
    LandingDiv,
    MobileDeveloperWrapper,
} from "./Landing.style";

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
            <Toolbar/>
        </Container>
    </LandingDiv>
}