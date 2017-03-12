// src/app/test.service.ts
// import { Injectable } from '@angular/core';

// import { environment } from '../../environments/environment';

// @Injectable()
// export class TestService {
//     apiKey: environment.apiKey
// }

import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class MapService {
    private apiKey = environment.apiKey;
    constructor(private http: Http) { }

    getApiKey(): Observable<string[]> {
        return this.http.get(this.apiKey)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
