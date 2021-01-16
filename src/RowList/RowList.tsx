import {SimpleList} from "@autofiy/rac-core";

interface RowListOptions {
    property : {
        [name : string] : any;
    }
}

export class RowList extends SimpleList {

    render(): JSX.Element {
        return super.render();
    }

    protected renderListHeader() : any {

    }

}