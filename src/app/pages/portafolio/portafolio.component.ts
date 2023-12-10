import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegationComponent } from '../../shared/navegation/navegation.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SliderPortfolioComponent } from '../../shared/slider-portfolio/slider-portfolio.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, NavegationComponent, HeaderComponent, SliderPortfolioComponent, FooterComponent],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.scss'
})
export class PortafolioComponent {

 
}
