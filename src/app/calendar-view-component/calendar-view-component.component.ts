import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calendar-view-component',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './calendar-view-component.component.html',
  styleUrl: './calendar-view-component.component.scss',
})
export class CalendarViewComponentComponent {
  selectedDate: Date = new Date();
}
