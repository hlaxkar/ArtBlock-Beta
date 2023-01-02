import { StoreType } from "./stor-type";

export class StoreConfig {
    storeType?:  StoreType;
    baseUrl?:    string;
    path!:       string;
    keyField?:   string;
    labelField?: string;
    idField?:string;
    name?: string;
    refreshOnInitUpdate?:boolean;
    loadOnInit?:boolean;
    optionKey?:string;
    optionLabel?:string;
    parentField:any;
}

