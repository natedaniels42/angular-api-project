import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesComponent } from './images.component';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image container if there is data', () => {
    component.data = [{image: 'ase'}, {image: 'aas'}, {image: 'dede'}];
    fixture.detectChanges();
    
    const imageContainer = document.getElementById('image-container');
    expect(imageContainer).toBeTruthy();
  })
});
