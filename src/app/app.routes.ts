import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ConocimientosComponent } from './pages/conocimientos/conocimientos.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Inicio',
        component: HomePageComponent
    },
    {
        path: 'conocimientos',
        title: 'conocimientos',
        component: ConocimientosComponent
    },
    {
        path: 'portafolio',
        title: 'Portafolio',
        component: PortafolioComponent
    },
    {
        path: 'contacto',
        title: 'Contacto',
        component: ContactoComponent
    }
    
];
