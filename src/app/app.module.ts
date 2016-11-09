import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule }   from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';
import { HomeComponent }   from './contact/home.component';
import { ContactListComponent }   from './contact/contact-list.component';
import { ContactDetailComponent }   from './contact/contact-detail.component';

@NgModule({
    imports:      [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        ContactModule
    ],

    declarations: [
        AppComponent,
        HomeComponent
    ],

    bootstrap:    [
        AppComponent
    ]
})

export class AppModule { }
