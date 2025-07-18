import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailQAndAComponent } from './detail-q-and-a.component';

describe('DetailQAndAComponent', () => {
  let component: DetailQAndAComponent;
  let fixture: ComponentFixture<DetailQAndAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailQAndAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailQAndAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
