import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CheckboxWidgetComponent } from "app/Widget/checkbox-widget/checkbox-widget.component";
import { CommonModule, } from "@angular/common";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CheckboxWidgetComponent
  ],
  imports: [CommonModule,FormsModule], //required for ngFor..and other directives..
  exports:[CheckboxWidgetComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]   
})

export class CheckBoxWidgetModule{

}