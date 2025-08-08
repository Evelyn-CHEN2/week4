import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Account } from './components/account/account';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'login', component: Login},
    {path: 'account', component: Account, canActivate: [authGuard]},
];
