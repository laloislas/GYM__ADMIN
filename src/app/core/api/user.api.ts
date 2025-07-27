import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserApi {
    private readonly apiController: string = '/auth';

    constructor(private http: HttpClient) { }


    public async register(request: any) {
        const url = `${this.apiController}/register`;
        const response = await this.http
            .post(`${url}`, request)
            .toPromise();
        return response;
    }


}