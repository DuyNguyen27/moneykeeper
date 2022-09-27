import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalIncomeTaxFinalizationComponent } from './personal-income-tax-finalization.component';

describe('PersonalIncomeTaxFinalizationComponent', () => {
  let component: PersonalIncomeTaxFinalizationComponent;
  let fixture: ComponentFixture<PersonalIncomeTaxFinalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalIncomeTaxFinalizationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalIncomeTaxFinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
