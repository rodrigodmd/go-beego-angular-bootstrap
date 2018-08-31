import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContentComponent} from './base/layout/content/content.component';
import {NavbarComponent} from './base/layout/navbar/navbar.component';
import {LoginComponent} from './base/auth/login/login.component';
import {RegisterComponent} from './base/auth/register/register.component';
import {ExampleListComponent} from './main/example-list/example-list.component';
import {ExampleFormComponent} from './main/example-form/example-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HelpComponent } from './main/help/help.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './base/layout/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ExampleListComponent,
    ExampleFormComponent,
    HelpComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
