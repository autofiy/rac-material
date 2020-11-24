import * as React from 'react';
import {Component} from 'react';
import {AutoCollection} from "rac-core";
import {Button, TableCell} from "@material-ui/core";

interface State {
    enable: boolean;
}

class TableExample extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {enable: true};
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({enable: !this.state.enable})}>
                    {this.state.enable ? "CLEAR" : "DISPLAY"}
                </Button>
                {
                    this.state.enable &&
                    <div>
                        <AutoCollection properties={{
                            extraProperties: [{name: 'action', title: 'Action'}],
                            render: {
                                action: (p, data) => <TableCell>
                                    <Button variant={"contained"} onClick={() => alert(JSON.stringify(data))}>
                                        DO ACTION
                                    </Button>
                                </TableCell>
                            }
                        }} extra={{dataSourceOptions: {url: "http://localhost:9000"}}}/>
                    </div>
                }
            </div>
        );
    }
}

export default TableExample;