import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhomepagesComponent } from './allhomepages.component';

describe('AllhomepagesComponent', () => {
  let component: AllhomepagesComponent;
  let fixture: ComponentFixture<AllhomepagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllhomepagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllhomepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
