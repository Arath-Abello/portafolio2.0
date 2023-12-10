import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { NavegationComponent } from '../../shared/navegation/navegation.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LenguajesComponent } from '../../shared/lenguajes/lenguajes.component';

@Component({
  selector: 'app-conocimientos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavegationComponent, LenguajesComponent ,FooterComponent],
  templateUrl: './conocimientos.component.html',
  styleUrl: './conocimientos.component.scss'
})
export class ConocimientosComponent {

}
