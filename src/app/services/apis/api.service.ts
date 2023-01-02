import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class ApiService{
  constructor(private http:HttpClient){}

  get<T>(apiPath:string):Observable<T>{
    return this.http.get<T>(environment.apiEndpoint+apiPath);
  }

  post<T>(apiPath:string,data:any):Observable<T>{
    return this.http.post<T>(environment.apiEndpoint+apiPath,data);
  }
}
