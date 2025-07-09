import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTourOwnerComponent } from './detail-tour-owner.component';

describe('DetailTourOwnerComponent', () => {
  let component: DetailTourOwnerComponent;
  let fixture: ComponentFixture<DetailTourOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTourOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailTourOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
