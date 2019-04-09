import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {StockListComponent} from './stocklist.component'

const routes:Routes =[   
    {
        path:'',
        component:StockListComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class StockListRoutingModule {}