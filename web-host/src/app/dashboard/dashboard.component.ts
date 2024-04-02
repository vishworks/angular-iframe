import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button'; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog'; 
import {ModaldialogComponent} from '../modaldialog/modaldialog.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(public dialog: MatDialog) {

  }

  launchModal() {
    this.dialog.open(ModaldialogComponent);
  }

}
