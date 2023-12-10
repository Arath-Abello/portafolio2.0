import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegationComponent } from '../../shared/navegation/navegation.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { PortfolioSlider } from '../../portfolio-slider';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, NavegationComponent, HeaderComponent],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.scss'
})
export class PortafolioComponent {

 
}
