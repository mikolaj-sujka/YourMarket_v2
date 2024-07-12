import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketViewComponent } from './basket-view.component';

describe('BasketViewComponent', () => {
  let component: BasketViewComponent;
  let fixture: ComponentFixture<BasketViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
