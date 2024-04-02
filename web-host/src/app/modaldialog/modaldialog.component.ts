import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-modaldialog',
  standalone: true,
  imports: [],
  templateUrl: './modaldialog.component.html',
  styleUrl: './modaldialog.component.scss'
})
export class ModaldialogComponent {

  @HostListener ('window: message', ['$event'])
  onMessage (event: any)  {
    console.log(event);
  }

  constructor () {

  }
}
