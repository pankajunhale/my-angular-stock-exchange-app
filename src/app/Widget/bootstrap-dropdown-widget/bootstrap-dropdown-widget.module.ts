import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BootstrapDropdownWidgetComponent} from "./bootstrap-dropdown-widget.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations:[
        BootstrapDropdownWidgetComponent
    ],
    imports: [CommonModule,FormsModule], //required for ngFor..and other directives..
    exports:[
        BootstrapDropdownWidgetComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA] 
})

export class BootstrapDropdownWidgetModule{

}