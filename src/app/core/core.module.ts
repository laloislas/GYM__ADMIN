import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationApi } from './api/authentication.api';
import { UserApi } from './api/user.api';

const API = [AuthenticationApi, UserApi];
const SERVICES: any = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
        ...API,
      ],
    };
  }
}