import React from 'react';
import {createTheme, Grid, ThemeProvider, Toolbar, useScrollTrigger} from "@mui/material";
import {AppBarWrapper, TypographyWrapper} from "./App.style";
import {Landing} from "./sections/Landing";
import {ExperienceAndSkills} from "./sections/ExperienceAndSkills";

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: `"Comic Neue", cursive`,
        },
    },
})

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
    return <ThemeProvider theme={theme}>
        <ElevationScroll>
            <AppBarWrapper>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item xs={12}>
                            <TypographyWrapper variant={"h4"}>
                                Prerit Kimtani
                            </TypographyWrapper>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBarWrapper>
        </ElevationScroll>
        <Toolbar/>
        <Landing />
        <ExperienceAndSkills />
    </ThemeProvider>
}
