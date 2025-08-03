import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardOptionsComponent } from './standard-options.component';

describe('StandardOptionsComponent', () => {
  let component: StandardOptionsComponent;
  let fixture: ComponentFixture<StandardOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
