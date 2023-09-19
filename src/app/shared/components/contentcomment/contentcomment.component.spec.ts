import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentcommentComponent } from './contentcomment.component';

describe('ContentcommentComponent', () => {
  let component: ContentcommentComponent;
  let fixture: ComponentFixture<ContentcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentcommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
