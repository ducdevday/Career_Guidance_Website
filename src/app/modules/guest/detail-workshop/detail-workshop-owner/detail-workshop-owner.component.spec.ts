import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWorkshopOwnerComponent } from './detail-workshop-owner.component';

describe('DetailWorkshopOwnerComponent', () => {
  let component: DetailWorkshopOwnerComponent;
  let fixture: ComponentFixture<DetailWorkshopOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailWorkshopOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailWorkshopOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
