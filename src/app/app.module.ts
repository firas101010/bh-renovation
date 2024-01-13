import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    HeaderComponent,
    HomeComponent,
    ServiceComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
