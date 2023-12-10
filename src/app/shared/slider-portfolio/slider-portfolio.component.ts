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
      img: '../../../assets/imgSlider1.webp',
      title: 'Ecommerce',
      description: 'sitio de ecommerce hecho en html, css, sass y javascript (solo frontend)',
      linkPage: ''
    },
    {
      id: 1,
      img: '../../../assets/imgSlider2.webp',
      title: 'Itsoft',
      description: 'sitio hecho con html, css, sass, javascript y bootstrap',
      linkPage: ''
    },
    {
      id: 3,
      img: '../../../assets/imgSlider3.webp',
      title: 'Smash',
      description: 'sitio hecho con con un tema vacio personalizado (underscores) en wordpress con html, css, jquery, boostrap y php',
      linkPage: ''
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
