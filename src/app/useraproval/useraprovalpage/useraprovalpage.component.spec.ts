import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraprovalpageComponent } from './useraprovalpage.component';

describe('UseraprovalpageComponent', () => {
  let component: UseraprovalpageComponent;
  let fixture: ComponentFixture<UseraprovalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraprovalpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraprovalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
