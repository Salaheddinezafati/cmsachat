import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestaproverComponent } from './requestaprover.component';

describe('RequestaproverComponent', () => {
  let component: RequestaproverComponent;
  let fixture: ComponentFixture<RequestaproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestaproverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestaproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
