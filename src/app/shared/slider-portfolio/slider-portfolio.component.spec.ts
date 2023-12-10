import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPortfolioComponent } from './slider-portfolio.component';

describe('SliderPortfolioComponent', () => {
  let component: SliderPortfolioComponent;
  let fixture: ComponentFixture<SliderPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
