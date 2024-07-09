import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSectionViewComponent } from './contact-section-view.component';

describe('ContactSectionViewComponent', () => {
  let component: ContactSectionViewComponent;
  let fixture: ComponentFixture<ContactSectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSectionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactSectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
