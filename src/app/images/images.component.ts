import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() images: string[] = [];
  @Input() index1: number = 0;
  @Input() index2: number = 1;
  @Input() index3: number = 2;
  currentMovie: {} = {};
  
  constructor() { }

  setCurrentMovie($event: Event) {
    this.currentMovie = this.data.find(movie => movie.image === ($event.target as HTMLImageElement).src) 
    console.log(this.currentMovie);
  }

  ngOnInit(): void {
  
  }

}
