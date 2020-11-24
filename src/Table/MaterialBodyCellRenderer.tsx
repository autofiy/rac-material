import {Property, SimpleCellRendererBase} from "rac-core";
import {TableCell} from "@material-ui/core";
import * as React from "react";

export class MaterialBodyCellRenderer extends SimpleCellRendererBase {

    protected getCustomRender(property: Property): any {
        return this.getAutoCollection().getProps().properties?.render?.[property.name];
    }

    protected renderDefault(property: Property, data: any): any {
        return <TableCell>{data[property.name]}</TableCell>
    }

}


export class MaterialHeaderCellRenderer extends MaterialBodyCellRenderer {
    protected getCustomRender(property: Property): any {
        return this.getAutoCollection().getProps().properties?.headerRender?.[property.name];
    }

    protected renderDefault(property: Property, data: any): any {
        return <TableCell>{property.title}</TableCell>
    }

}