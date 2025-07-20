import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardTourComponent } from './standard-tour.component';

describe('StandardTourComponent', () => {
  let component: StandardTourComponent;
  let fixture: ComponentFixture<StandardTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardTourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
