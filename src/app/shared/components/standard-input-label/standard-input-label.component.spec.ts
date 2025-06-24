import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardInputLabelComponent } from './standard-input-label.component';

describe('StandardInputLabelComponent', () => {
  let component: StandardInputLabelComponent;
  let fixture: ComponentFixture<StandardInputLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardInputLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardInputLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
