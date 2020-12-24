import {TableCell} from "@material-ui/core";
import * as React from "react";
import {SimpleCellRendererBase} from "@autofiy/rac-core";
import {Property} from "@autofiy/property";

export class MaterialCellRenderer extends SimpleCellRendererBase {

    protected getCustomRender(property: Property): any {
        return this.getAutoCollection().getProps().properties?.renderValue?.[property.name];
    }

    protected renderDefault(property: Property, data: any): any {
        return <TableCell>{data[property.name]}</TableCell>
    }

}


export class MaterialHeaderCellRenderer extends MaterialCellRenderer {
    protected getCustomRender(property: Property): any {
        return this.getAutoCollection().getProps().properties?.renderTitle?.[property.name];
    }

    protected renderDefault(property: Property, data: any): any {
        return <TableCell>{property.title}</TableCell>
    }

}