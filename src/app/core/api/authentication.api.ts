import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationApi {
    private readonly apiController: string = '/auth';

    constructor(private http: HttpClient) { }


    public async auth(request: any) {
        const url = `${this.apiController}/login`;
        const response = await this.http
            .post(`${url}`, request)
            .toPromise();
        return response;
    }


}