import {NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {RadioWidgetComponent} from "./radio-widget.component";


@NgModule({
    declarations:[
        RadioWidgetComponent
    ],
    imports: [CommonModule,FormsModule], //required for ngFor..and other directives..
    exports:[
        RadioWidgetComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA] 
})

export class RadioWidgetModule{

}