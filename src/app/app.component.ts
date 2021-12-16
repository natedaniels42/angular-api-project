import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-api-project';

  graph2 = {
    data: [
      { x: ['1979-12-12 12', '1979-12-12 13', '1979-12-12 14', '1979-12-12 15', '1979-12-12 16'], y: [1, 4, 9, 4, 1], type: 'scatter' },
      { x: ['1979-12-12 12', '1979-12-12 13', '1979-12-12 14', '1979-12-12 15', '1979-12-12 16'], y: [1, 3, 6, 9, 6], type: 'scatter' },
      { x: ['1979-12-12 12', '1979-12-12 13', '1979-12-12 14', '1979-12-12 15', '1979-12-12 16'], y: [1, 2, 4, 5, 6], type: 'scatter' },
    ],
    layout: {title: 'Some Data to Highlight'}
  };
}
