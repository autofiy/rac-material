import {AutoCollectionDefault, ServiceDefault} from "rac-core";
import {MaterialCollectionRenderer} from "./Services/MaterialCollectionRenderer";
import {LinearProgress, Paper, Typography} from "@material-ui/core";
import React from "react";
import {locals} from "./Localization";

export function setupRacMaterial(): void {
    ServiceDefault.renderer = (ac) => new MaterialCollectionRenderer(ac);
    AutoCollectionDefault.renderLoading = () =>
        <div style={{padding: 16, textAlign: 'center'}}>
            <LinearProgress variant={"indeterminate"} />
        </div>;
    AutoCollectionDefault.renderError = () =>
        <React.Fragment>
            <Paper style={{padding: 16 , background : '#E00' , color : '#FFF'}}>
                <Typography align={"center"}>{locals.fetch_data_fails}</Typography>
            </Paper>
            <br/><br/>
        </React.Fragment>;
    AutoCollectionDefault.renderEmpty = () =>
        <div style={{padding: 16}}>
            <Typography color={"primary"} align={"center"}>{locals.no_data}</Typography>
        </div>
}