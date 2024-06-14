import { Routes } from '@angular/router';
import { NicknamesComponent } from './tools/nicknames/nicknames.component';
import { EmailsComponent } from './tools/emails/emails.component';

export const routes: Routes = [
    { path: '', redirectTo: 'nicknames', pathMatch: 'full' },
    { path: 'nicknames', component: NicknamesComponent },
    { path: 'emails', component: EmailsComponent },
];
