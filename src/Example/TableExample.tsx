import * as React from 'react';
import {Component} from 'react';
import {Button, TableCell} from "@material-ui/core";
import {AutoCollection, HttpDataFetcher} from "@autofiy/rac-core";

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
                        <AutoCollection services={{fetcher : (autofiyable) => new HttpDataFetcher(autofiyable)}}
                            properties={{
                            extraProperties: [{name: 'action', title: 'Action'}],
                            renderValue: {
                                name: (_, {name}, {index}) => {
                                    console.log(_, name, index);
                                    return <TableCell>{`${index} ${name}`}</TableCell>;
                                },
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