import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardTitleComponent } from './standard-title.component';

describe('StandardTitleComponent', () => {
  let component: StandardTitleComponent;
  let fixture: ComponentFixture<StandardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
