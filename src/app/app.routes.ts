import { Routes } from '@angular/router';
import { NoteForm } from './note-form/note-form';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'form',
        component: NoteForm,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
