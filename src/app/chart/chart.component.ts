import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() x: string[] = [];
  @Input() y: number[] = [];
  @Input() graph = {
    data: [
      {
        x: this.x,
        y: this.y,
        name: 'rating 1',
        type: 'bar'
      }
    ],
    layout: {title: 'Movie Data'}
  }
  
  constructor() { }

  onClick() {
    console.log(this.data);
    console.log(this.x);
    console.log(this.y);
    console.log(this.graph);
  }

  ngOnInit(): void {
  }

}
