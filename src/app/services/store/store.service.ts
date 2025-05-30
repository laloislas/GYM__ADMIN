import { Injectable } from '@angular/core';
import { App } from 'src/app/model/app.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public app: App;

  constructor() { }

  public getState(): App {
    this.app = JSON.parse(localStorage.getItem('app') ?? '{}');
    return this.app;
  }

  public setState(app: App): void {
    this.app = app;
    localStorage.setItem('app', JSON.stringify(this.app));
  }

  public clearState(): void {
    localStorage.removeItem('app');
  }

}
