import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccesAdminComponent } from "./Modules/Login/acces-admin/acces-admin.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccesAdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gymAdmin';
}
