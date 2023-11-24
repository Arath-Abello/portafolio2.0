import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { NavegationComponent } from '../../shared/navegation/navegation.component';

@Component({
  selector: 'app-conocimientos',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavegationComponent],
  templateUrl: './conocimientos.component.html',
  styleUrl: './conocimientos.component.scss'
})
export class ConocimientosComponent {

}
