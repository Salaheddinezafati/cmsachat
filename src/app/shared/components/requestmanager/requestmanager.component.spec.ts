import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestmanagerComponent } from './requestmanager.component';

describe('RequestmanagerComponent', () => {
  let component: RequestmanagerComponent;
  let fixture: ComponentFixture<RequestmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
