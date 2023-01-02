import { StoreType } from "./stor-type";
import { StoreConfig } from "./store-config";

export const StoreConfigList: { [key: string]: StoreConfig } = {
  profitCenter: {
    name: "profit-center",
    path: "/ctrm-api/api/profitcenterconfig/v1/getall",
    refreshOnInitUpdate: false,
    loadOnInit: true,
    optionKey: 'id',
    optionLabel: 'atsStatus',
    parentField:undefined,
    storeType:StoreType.api
  }
}
