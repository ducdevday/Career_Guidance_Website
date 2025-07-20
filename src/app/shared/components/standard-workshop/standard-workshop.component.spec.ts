import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardWorkshopComponent } from './standard-workshop.component';

describe('StandardWorkshopComponent', () => {
  let component: StandardWorkshopComponent;
  let fixture: ComponentFixture<StandardWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardWorkshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
