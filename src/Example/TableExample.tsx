import * as React from 'react';
import {Component} from 'react';
import {AutoCollection} from "rac-core";
import {Button, TableCell} from "@material-ui/core";

class TableExample extends Component {
    render() {
        const data = [
            TableExample.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            TableExample.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            TableExample.createData('Eclair', 262, 16.0, 24, 6.0),
            TableExample.createData('Cupcake', 305, 3.7, 67, 4.3),
            TableExample.createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];
        return (
            <AutoCollection properties={{
                titles: {name: 'Name', calories: 'Cals', fat: 'Fats', carbs: 'Carbohydrates', protein: 'Proteins'},
                extraProperties: [{name: 'action', title: 'Action'}],
                render: {
                    action: (p, data) => <TableCell>
                        <Button variant={"contained"} onClick={() => alert(JSON.stringify(data))}>
                            DO ACTION
                        </Button>
                    </TableCell>
                }
            }} extra={{dataSourceOptions: {data: data}}}/>
        );
    }

    private static createData(name: any, calories: any, fat: any, carbs: any, protein: any) {
        return {name: name, calories: calories, fat: fat, carbs: carbs, protein: protein};
    }
}

export default TableExample;