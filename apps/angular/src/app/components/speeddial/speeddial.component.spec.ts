import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeeddialComponent } from './speeddial.component';

describe('SpeeddialComponent', () => {
  let component: SpeeddialComponent;
  let fixture: ComponentFixture<SpeeddialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeeddialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeeddialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
