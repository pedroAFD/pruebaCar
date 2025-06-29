import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CreateBudgetPopupComponent } from '../create-budget-popup/create-budget-popup.component';

@Component({
  selector: 'app-messaging-panel-component',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './messaging-panel-component.component.html',
  styleUrl: './messaging-panel-component.component.scss',
})
export class MessagingPanelComponentComponent {
  readonly dialog = inject(MatDialog);

  
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateBudgetPopupComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }
}
