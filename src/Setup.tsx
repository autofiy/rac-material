import {MaterialCollectionRenderer} from "./Services/MaterialCollectionRenderer";
import {Box, LinearProgress, Paper, Theme, Typography, withTheme} from "@material-ui/core";
import React from "react";
import {locals} from "./Localization";
import {AutoCollectionDefault} from "@autofiy/rac-core";
import {DefaultServices} from "@autofiy/rac-core/build/AutoCollection/AutoCollectionProps";

export function setupRacMaterial(): void {
    DefaultServices.renderer = (ac) => new MaterialCollectionRenderer(ac);
    AutoCollectionDefault.renderLoading = () => <ThemedLoadingComponent/>;
    AutoCollectionDefault.renderError = () => <ThemedErrorComponent/>;
    AutoCollectionDefault.renderEmpty = () => <ThemedEmptyComponent/>;
}

interface ThemeProps {
    theme: Theme;
}

function ErrorComponent(props: ThemeProps) {
    const {theme} = props;
    return <Paper style={{background: theme.palette.error.main}}>
        <Box p={2}>
            <Typography align={"center"}>{locals.fetch_data_fails}</Typography>
        </Box>
    </Paper>
}

const ThemedErrorComponent = withTheme(ErrorComponent);

function EmptyComponent(props: ThemeProps) {
    const {theme} = props;
    return <Paper style={{background: theme.palette.info.main}}>
        <Box p={2}>
            <Typography align={"center"}>{locals.no_data}</Typography>
        </Box>
    </Paper>
}

const ThemedEmptyComponent = withTheme(EmptyComponent);

function LoadingComponent(props: ThemeProps) {
    return <Box p={2}>
        <LinearProgress variant={"indeterminate"}/>
    </Box>
}

const ThemedLoadingComponent = withTheme(LoadingComponent);