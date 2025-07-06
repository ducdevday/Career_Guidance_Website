import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTourComponent } from './all-tour.component';

describe('AllTourComponent', () => {
  let component: AllTourComponent;
  let fixture: ComponentFixture<AllTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
