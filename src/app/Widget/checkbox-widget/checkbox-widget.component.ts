import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CheckBoxWidgetOptions} from './Model/checkbox-widget.options'
import * as _ from 'underscore';
import {CheckBoxWidgetComponentService} from './Service/checkbox-widget.component.service';
import {CheckboxWidgetModel} from './Model/checkbox-widget-model';

@Component({
  selector: 'checkbox-widget',
  templateUrl: './checkbox-widget.component.html',
  styleUrls: ['./checkbox-widget.component.css'],
  providers:[CheckBoxWidgetComponentService] 
})
export class CheckboxWidgetComponent implements OnInit {
  @Input() options:any;
  @Output() onItemSelect: EventEmitter<any> = new EventEmitter();

  public CheckBoxList:Array<CheckboxWidgetModel>;
  public SelectedCheckboxItem: Array<CheckboxWidgetModel>;
  constructor(private _checkBoxService:CheckBoxWidgetComponentService) {
    this.CheckBoxList = [];
    this.SelectedCheckboxItem = [];
   }
 //   this.
  ngOnInit() {
    debugger;
    this._checkBoxService.ValidateInputOptions(this.options);   
    this.CheckBoxList = this._checkBoxService.GenerateCollection(this.options.Source,this.options.DisplayKey);
    //this.SelectedCheckboxItem.push(_.first(this.CheckBoxList));
    console.log(this.SelectedCheckboxItem);
  }
 
  onChange(item:CheckboxWidgetModel) {
    if(this.SelectedCheckboxItem.indexOf(item) > -1){
        //remove= 
        this.SelectedCheckboxItem = _.without(this.SelectedCheckboxItem, item);
        this.SendDataOnItemSelect(this.SelectedCheckboxItem);
    }
      else{
        //add
        this.SelectedCheckboxItem.push(item);
        this.SendDataOnItemSelect(this.SelectedCheckboxItem);
      }
  }
  private SendDataOnItemSelect(data:CheckboxWidgetModel[]):void{
    this.onItemSelect.emit(data);
  }

}

//http://www.concretepage.com/angular-2/angular-2-input-and-output-example