import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagingPanelComponentComponent } from "./messaging-panel-component/messaging-panel-component.component";
import { CalendarViewComponentComponent } from "./calendar-view-component/calendar-view-component.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessagingPanelComponentComponent, CalendarViewComponentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngCar';
}
