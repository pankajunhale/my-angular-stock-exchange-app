import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {routes} from './app.router';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-bootstrap';
import { HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './Header/header.component';
import {FooterComponent} from './Footer/footer.component';
import {SidebarComponent} from './Header/Sidebar/sidebar.component';
import {ProfileMenuBarComponent} from './Header/ProfileMenubar/profilemenubar.component';
import { HomeComponent } from './home/home.component';
import { LoggerInterceptor } from "app/common/service/interceptor/logger.interceptor";
import { AlphaVantageKeywordSearchService } from "app/services/alphavantage.keyword.search.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProfileMenuBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, //must use if uses ngModel,
    routes,
    DatepickerModule.forRoot()
  ],
  exports:[],
  providers: [
    AlphaVantageKeywordSearchService,
    {provide: HTTP_INTERCEPTORS,useClass:LoggerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]  
})
export class AppModule { }
