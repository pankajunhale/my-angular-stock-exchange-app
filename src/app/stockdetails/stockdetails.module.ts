import { NgModule } from '@angular/core';
import { StockDetailsRoutingModule } from './stockdetails.routing.module';
import { StockDetailsComponent } from './stockdetails.component';
import { StockDetailsComponentService } from './stockdetails.component.service';

@NgModule({
    imports:[
        StockDetailsRoutingModule
    ],
    declarations:[
        StockDetailsComponent        
    ],
    providers:[
        StockDetailsComponentService
    ]
})
export class StockDetailsModule{

}

