import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface Data {}

@Injectable({
  providedIn: "root",
})
export class CovidDataService {
  constructor(private _http: HttpClient) {}

  fetchCountryData(): Observable<object> {
    return this._http.get("https://api.covid19india.org/data.json");
  }
}
