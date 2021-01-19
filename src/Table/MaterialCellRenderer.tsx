import {TableCell} from "@material-ui/core";
import * as React from "react";
import {SimpleCellRendererBase} from "@autofiy/rac-core";
import {Property} from "@autofiy/property";

export class MaterialCellRenderer extends SimpleCellRendererBase {

    protected getCustomRender(property: Property, data: any, rowIndex: number): any {
        const renderer = this.getAutoCollection().getProps().properties?.renderValue?.[property.name];
        return renderer ? renderer(property , data , {index : rowIndex} , this.getAutoCollection()) : undefined;
    }

    protected renderDefault(property: Property, data: any): any {
        return <TableCell>{data[property.name]}</TableCell>
    }

}


export class MaterialHeaderCellRenderer extends MaterialCellRenderer {
    protected getCustomRender(property: Property, data: any, rowIndex: number): any {
        const renderer = this.getAutoCollection().getProps().properties?.renderTitle?.[property.name];
        return renderer ? renderer(property , this.getAutoCollection()) : undefined;
    }

    protected renderDefault(property: Property, data: any): any {
        return <TableCell>{property.title}</TableCell>
    }

}