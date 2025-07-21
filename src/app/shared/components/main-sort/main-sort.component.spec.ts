import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSortComponent } from './main-sort.component';

describe('MainSortComponent', () => {
  let component: MainSortComponent;
  let fixture: ComponentFixture<MainSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
