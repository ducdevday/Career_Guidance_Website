import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleProcessbarComponent } from './circle-processbar.component';

describe('CircleProcessbarComponent', () => {
  let component: CircleProcessbarComponent;
  let fixture: ComponentFixture<CircleProcessbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleProcessbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleProcessbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
