import React from 'react';
import {Grid, Toolbar, Typography, useScrollTrigger} from "@mui/material";
import {AppBarWrapper, TypographyWrapper} from "./App.style";
import {Landing} from "./sections/Landing";
import {AboutMe} from "./sections/AboutMe";

function ElevationScroll(props: { children: React.ReactElement }) {
    const {children} = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
}

export const App = () => {
    return <>
        <ElevationScroll>
            <AppBarWrapper>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs={12} sm={8} md={9}>
                            <TypographyWrapper variant={"h6"}>
                                Prerit Kimtani
                            </TypographyWrapper>
                        </Grid>
                        <Grid item sx={{display: {xs: 'none', sm: 'block'}}} sm={"auto"} xl={"auto"}>
                            <Typography component="div">
                                About
                            </Typography>
                        </Grid>
                        <Grid item sx={{display: {xs: 'none', sm: 'block'}}} sm={"auto"} xl={"auto"}>
                            <Typography component="div">
                                Journey
                            </Typography>
                        </Grid>
                        <Grid item sx={{display: {xs: 'none', sm: 'block'}}} sm={"auto"} xl={"auto"}>
                            <Typography component="div">
                                Contact
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBarWrapper>
        </ElevationScroll>
        <Toolbar/>
        <Landing />
        <AboutMe />
    </>
}
