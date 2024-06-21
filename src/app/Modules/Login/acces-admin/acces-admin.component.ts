import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './acces-admin.component.html',
  styleUrl: './acces-admin.component.scss'
})
export class AccesAdminComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    const isAvailable = Capacitor.isPluginAvailable('Camera');
    const device = Capacitor.isNativePlatform();
    console.log(isAvailable);
  }

  async ngOnInit() {
    this.createFormLogin();
    await this.takePicture();
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    console.log(imageUrl);
    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
  };


  get f() {
    return this.loginForm.controls;
  }

  private createFormLogin() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], // Modificado: Asignamos el FormControl correspondiente al campo "nombre"
      password: ['', Validators.required] // Modificado: Asignamos el FormControl correspondiente al campo "email"
    });
  }

  public onSubmit() {
    alert("Login correcto")
  }
}
