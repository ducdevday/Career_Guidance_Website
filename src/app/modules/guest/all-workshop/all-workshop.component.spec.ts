import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorkshopComponent } from './all-workshop.component';

describe('AllWorkshopComponent', () => {
  let component: AllWorkshopComponent;
  let fixture: ComponentFixture<AllWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllWorkshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
