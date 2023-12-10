import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSlider } from '../../portfolio-slider';

@Component({
  selector: 'app-slider-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-portfolio.component.html',
  styleUrl: './slider-portfolio.component.scss'
})
export class SliderPortfolioComponent {

  public slider: PortfolioSlider[] = [
    {
      id: 0,
      img: 'hola',
      title: 'hhola',
      description: 'hola3'
    },
    {
      id: 1,
      img: 'hola',
      title: 'hhola',
      description: 'hola3'
    },
    {
      id: 3,
      img: 'hola',
      title: 'hhola',
      description: 'hola3'
    }
  ]
    
  public activeSlideIndex = 0;
  
  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slider.length;
  }
  
  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.slider.length) % this.slider.length;
  }
  
}
