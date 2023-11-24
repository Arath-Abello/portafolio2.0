import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ConocimientosComponent } from './pages/conocimientos/conocimientos.component';

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
    
];
