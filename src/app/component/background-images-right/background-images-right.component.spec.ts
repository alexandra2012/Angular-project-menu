import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImagesRightComponent } from './background-images-right.component';

describe('BackgroundImagesRightComponent', () => {
  let component: BackgroundImagesRightComponent;
  let fixture: ComponentFixture<BackgroundImagesRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundImagesRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundImagesRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
