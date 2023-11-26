import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegationComponent } from '../../shared/navegation/navegation.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, NavegationComponent, HeaderComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

}
