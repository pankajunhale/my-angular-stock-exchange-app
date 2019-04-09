import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {StockDetailsComponent} from './stockdetails.component'

const routes:Routes =[   
    {
        path:'',
        component:StockDetailsComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class StockDetailsRoutingModule {}