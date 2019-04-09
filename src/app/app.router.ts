import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

export const router:Routes =[
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:"search/keyword/:keyword",loadChildren:"../app/stocklist/stocklist.module#StockListModule"},
    {path:"company/:time-series/:symbol",loadChildren:"../app/stockdetails/stockdetails.module#StockDetailsModule"}
    
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);

//https://angular-2-training-book.rangle.io/handout/routing/query_params.html