import { BehaviorSubject, Subject } from "rxjs";
import { ApiService } from "../apis/api.service";
import { Status } from "../model/status";
import { Store } from "./store";
import { StoreConfig } from "./store-config";

export interface Update {
  status: Status;
  value?: any;
  error?: any;
}

export class BasicApiStore implements Store<any> {
  protected _list$ = new BehaviorSubject<any[]>([]);
  protected _state$ = new Subject<Update>();

  values = this._list$.asObservable();
  state$ = this._state$.asObservable();
  protected status!: string;
  protected error!: string;
  protected apiService: ApiService;
  config!: StoreConfig;
  idField!: string;
  list: any[] = [];

  constructor(storeConfig: StoreConfig, apiService: ApiService) {
    this.config = storeConfig
    this.idField = this.config.idField || 'uuid';
    this.apiService = apiService;
  }

  insert(obj: any, index?: any) {
    this.status = Status.PENDING;
    this._state$.next({ status: this.status });

    this.apiService.post(this.config.path, obj).subscribe((resp: any) => {
      obj[this.idField] = resp[this.idField]
      this.add(resp, index);
      this.status = Status.UPDATEED;
      this._state$.next({ status: this.status, value: resp });

    },
      err => {
        console.error(this.config.name, obj, err);
        this.status = Status.ERROR;
        this.error = 'Error updating item, Please check all values';
        this._state$.next({ status: this.status, error: this.error });
      });
  }


  add(obj: any, index?: any): void {
    if (obj[this.idField]) {
      this.delete(obj[this.idField]);
    }
    if (index !== undefined) {
      this.list.splice(index, 0, obj)
    } else {
      this.list.unshift(obj)
    }
    this._list$.next(this.list);
  }

  delete(key: string | number) {
    const index = this.list.findIndex(e => e[this.idField] === key);
    const item = this.list[index];
    if (index >= 0) {
      this.list.splice(index, 1);
      this.status = Status.DELETED;
      this._state$.next({ status: this.status });
    }
    return item;
  }

}
