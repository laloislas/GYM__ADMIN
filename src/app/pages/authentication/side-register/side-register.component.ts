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
import { UserApi } from 'src/app/core/api/user.api';
import { EventService } from 'src/app/services/event/event.service';
import { StoreService } from 'src/app/services/store/store.service';
@Component({
  selector: 'app-side-register',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrandingComponent,
  ],
  templateUrl: './side-register.component.html',
})
export class AppSideRegisterComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService, private router: Router, private userApi: UserApi, private EventService: EventService) { }

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    try {
      if (this.form.value.password !== this.form.value.confirmpassword) {
        throw new Error('Las contraseñas no coinciden');
      }
      const request = {
        idRol: 1,
        name: this.form.value.uname,
        email: this.form.value.email,
        password: this.form.value.password
      };
      const response: any = this.userApi.register(request);
      if (response.status === 'success') {
        this.EventService.swalSuccessNotify({
          text: 'Usuario registrado correctamente',
          title: 'Registro exitoso',
          callBack: () => {
            this.router.navigate(['/authentication/login']);
          }
        });
      } else {
        throw new Error('Error al registrar usuario');
      }

    } catch (error) {
      console.log(error);
    }



  }
}
