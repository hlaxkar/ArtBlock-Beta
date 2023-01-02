import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class JsonService{
  constructor(private http:HttpClient){}

  get<T>(apiPath:any):Observable<T>{
    return this.http.get<T>("../../../assets/"+apiPath);
  }
}
