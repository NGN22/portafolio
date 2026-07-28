import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CredentialsComponent } from './credentials/credentials';
import { Projects } from './projects/projects';


export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'credentials',
        component: CredentialsComponent
    },
    {
        path: '',
        component: Home
    },
    {
        path: 'projects',
        component: Projects
    }

    

];
