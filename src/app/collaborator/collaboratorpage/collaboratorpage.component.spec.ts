import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorpageComponent } from './collaboratorpage.component';

describe('CollaboratorpageComponent', () => {
  let component: CollaboratorpageComponent;
  let fixture: ComponentFixture<CollaboratorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
