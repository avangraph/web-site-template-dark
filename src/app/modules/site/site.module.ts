import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        SiteComponent,
        IndexComponent,
        ContactsComponent,
        AboutComponent
    ],
    imports: [
        CommonModule,
        SiteRoutingModule,
        SharedModule
    ]
})
export class SiteModule { }
