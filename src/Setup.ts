import {ServiceDefault} from "rac-core";
import {MaterialCollectionRenderer} from "./Services/MaterialCollectionRenderer";

export function setupRacMaterial(): void {
    ServiceDefault.renderer = (ac) => new MaterialCollectionRenderer(ac);
}