import { Injectable } from '@angular/core';
import { ApiService } from '../apis/api.service';
import { JsonService } from '../apis/json.service';
import { BasicApiStore } from './basic-api-store';
import { JsonStore } from './json-store';
import { StoreType } from './stor-type';

import { Store } from './store';
import { StoreConfig } from './store-config';
import { StoreConfigList } from './store-configcopy';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stateObjects: { [k: string]: any } = {};

  stateQuery: { [k: string]: string } = {};

  stores: Map<string, Store<any>> = new Map();

  storeConfigsJson!:{ [k: string]: StoreConfig };

  // storeConfigsApi!:{ [k: string]: StoreConfig };

  constructor(private jsonService: JsonService,private apiService:ApiService) {
    jsonService.get<{ [k: string]: StoreConfig }>('/assets/application/config/stores.json').subscribe(data => {
      this.storeConfigsJson=data;
    });
    this.storeConfigsJson=StoreConfigList
  }

  getState<T extends Store<any>>(name: string): T {

    if (!this.stores.has(name)) {
      switch(this.storeConfigsJson[name].storeType) {
        case StoreType.json:
          this.stores.set(name, new JsonStore(this.storeConfigsJson[name],this.jsonService));
          break;
        case StoreType.api:
          this.stores.set(name, new BasicApiStore(this.storeConfigsJson[name],this.apiService));
      }

    }
    return this.stores.get(name) as T;
  }
}
