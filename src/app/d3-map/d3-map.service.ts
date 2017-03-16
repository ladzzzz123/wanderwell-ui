
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';


@Injectable()
export class D3MapService {

  topojson;
  private topoJsonUrl = './assets/topojson/world-continents.json';
  private worldCountriesUrl = './assets/topojson/world-countries.json';

  constructor(private http: Http) { }

  getTopoJson(): Observable<any> {
    // return this.http.get("./assets/topojson/world-continents.json")
    //        .map((response: Response) => response.json())
        return this.http.get("./assets/topojson/portland.json")
           .map((response: Response) => response.json())
      // return this.http.get("./assets/topojson/uk.json")
      //     .map((response: Response) => response.json())
  }

  getWorldCountries(): Observable<any> {
    return this.http.get(this.worldCountriesUrl)
      .map((response: Response) => response.json());
  }
}