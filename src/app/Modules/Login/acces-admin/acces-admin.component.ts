import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './acces-admin.component.html',
  styleUrl: './acces-admin.component.scss'
})
export class AccesAdminComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createFormLogin();
  }


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
