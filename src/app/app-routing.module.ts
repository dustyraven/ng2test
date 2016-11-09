import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './contact/home.component';
import { ContactListComponent }   from './contact/contact-list.component';
import { ContactDetailComponent }   from './contact/contact-detail.component';
import { ContactEditComponent }   from './contact/contact-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-list',     component: ContactListComponent },
  { path: 'contact-edit/:id', component: ContactEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
