import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { BrandingComponent } from '../../../layouts/full/vertical/sidebar/branding.component';
import { AuthenticationApi } from 'src/app/core/api/authentication.api';
import { StoreService } from 'src/app/services/store/store.service';
import { App } from 'src/app/model/app.interface';
import { EventService } from 'src/app/services/event/event.service';
@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, BrandingComponent],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  public app: App = {};
  constructor(private router: Router, private AuthenticationApi: AuthenticationApi, private StoreService: StoreService, private EventService: EventService) {
    this.app = this.StoreService.getState();
  }

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  async submit() {
    try {
      //this.EventService.showLoading();
      const request = {
        email: this.form.value.uname,
        password: this.form.value.password,
      };
      const response: any = await this.AuthenticationApi.auth(request);
      if (response.status == 'success') {
        this.app.currentUser = response?.data?.user;
        this.app.token = response?.data?.token;
        this.StoreService.setState(this.app);
      } else {
        this.EventService.swalErrorNotify({
          text: 'Credenciales incorrectas',
        });
      }

    } catch (error) {
      this.EventService.swalErrorNotify({
        text: 'Credenciales incorrectas',
      });
    }


    //this.router.navigate(['dashboard']);
  }
}
