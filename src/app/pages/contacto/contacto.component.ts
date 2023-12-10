import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegationComponent } from '../../shared/navegation/navegation.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, NavegationComponent, HeaderComponent, FooterComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

}
