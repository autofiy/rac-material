import {SimpleCollectionRenderer} from "rac-core";
import Table from "../Table/Table";

export class MaterialCollectionRenderer extends SimpleCollectionRenderer {

    protected getDefaultCollectionComponent(): any {
        return Table;
    }

}