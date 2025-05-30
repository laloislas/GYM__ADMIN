import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }
  public async getOrdersByPrint(filter?: any): Promise<any> {
    const url = '/mercadolibre/getOrderByPrint';
    const response: any = await this.http
      .post(url, { filter: filter })
      .toPromise();
    console.log(response);
    return response;
  }
}
