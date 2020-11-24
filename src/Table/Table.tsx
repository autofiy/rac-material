import * as React from "react";
import {CellRenderer, SimpleTable} from "rac-core";
import {MaterialCellRenderer, MaterialHeaderCellRenderer} from "./MaterialCellRenderer";
import {Table as MaterialTable, TableBody, TableHead, TableRow} from "@material-ui/core";

class Table extends SimpleTable {
    protected getBodyCellRenderer(): CellRenderer {
        return new MaterialCellRenderer(this.getAutoCollection());
    }

    protected getHeaderCellRenderer(): CellRenderer {
        return new MaterialHeaderCellRenderer(this.getAutoCollection());
    }


    render(): JSX.Element {
        return <MaterialTable>
            {this.renderTableHead()}
            {this.renderTableBody()}
        </MaterialTable>
    }

    protected renderTableHead(): any {
        return <TableHead>
            <TableRow>
                {this.renderHeaderCells()}
            </TableRow>
        </TableHead>
    }

    protected renderTableBody(): any {
        return <TableBody>
            {
                this.renderRows()
            }
        </TableBody>
    }

    protected renderRows(): any {
        return this.getData().map(
            (item: any, index: number) =>
                <TableRow key={index}>
                    {
                        this.getProperties().map(p => this.bodyCellRenderer.render(p, item))
                    }
                </TableRow>
        );
    }

}

export default Table;