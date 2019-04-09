import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StockListRoutingModule } from './stocklist.routing.module';
import { StockListComponent } from './stocklist.component';
import { StockListComponentService } from './stocklist.component.service';
import { AlphaVantageSearchService } from "app/services/alphavantage.service";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[
        StockListRoutingModule,
        CommonModule,
        FormsModule
    ],
    declarations:[
        StockListComponent        
    ],
    providers:[
        StockListComponentService,
        AlphaVantageSearchService
    ]
})
export class StockListModule{

}