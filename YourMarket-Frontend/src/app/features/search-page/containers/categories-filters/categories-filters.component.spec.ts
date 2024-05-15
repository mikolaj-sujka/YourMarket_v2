import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFiltersComponent } from './categories-filters.component';

describe('CategoriesFiltersComponent', () => {
  let component: CategoriesFiltersComponent;
  let fixture: ComponentFixture<CategoriesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
