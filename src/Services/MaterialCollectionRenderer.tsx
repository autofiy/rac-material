import Table from "../Table/Table";
import {SimpleCollectionRenderer} from "@autofiy/rac-core";

export class MaterialCollectionRenderer extends SimpleCollectionRenderer {

    protected getDefaultCollectionComponent(): any {
        return Table;
    }

}