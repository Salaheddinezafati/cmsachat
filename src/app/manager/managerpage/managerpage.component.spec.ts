import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerpageComponent } from './managerpage.component';

describe('ManagerpageComponent', () => {
  let component: ManagerpageComponent;
  let fixture: ComponentFixture<ManagerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
