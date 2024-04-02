import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-query-builder',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './query-builder.component.html',
  styleUrl: './query-builder.component.scss'
})
export class QueryBuilderComponent {

  postMessage() {
    parent.postMessage('vishworks', '*');
  }

}
