import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailRegistrationComponent } from './verify-email-registration.component';

describe('VerifyEmailRegistrationComponent', () => {
  let component: VerifyEmailRegistrationComponent;
  let fixture: ComponentFixture<VerifyEmailRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyEmailRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyEmailRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
