import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../../services/event/event.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading$: Observable<boolean>;

  constructor(private eventService: EventService) {
    this.isLoading$ = this.eventService.loading$;
  }
}