import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{RadioWidgetOptions} from './Model/radio-widget-options';
import {RadioWidgetModel} from './Model/radio-widget-model';
import * as _ from 'underscore';
import {RadioWidgetComponentService} from './Service/radio-widget.component.service';
@Component({
  selector: 'radio-widget',
  templateUrl: './radio-widget.component.html',
  styleUrls: ['./radio-widget.component.css'],
  providers:[RadioWidgetComponentService],
})
export class RadioWidgetComponent implements OnInit {
  @Input() options:RadioWidgetOptions = new RadioWidgetOptions();  
  @Input() ActiveItemOnInit:RadioWidgetModel = null;
  @Output() onRadioBoxSelect: EventEmitter<any> = new EventEmitter();
  public RadioList: Array<RadioWidgetModel>;
  public SelectedRadioItem: RadioWidgetModel;
  constructor(private _service:RadioWidgetComponentService) {

   }

  ngOnInit() {
    this.RadioList = this._service.GenerateCollection(this.options.Source, this.options.DisplayKey);
    if(this.ActiveItemOnInit == null || this.ActiveItemOnInit == undefined){
      //this.SelectedRadioItem = _.first(this.RadioList);
    }
    else{      
      this.SelectedRadioItem = this._service.FindSelectedItemFromCollection(this.RadioList,this.ActiveItemOnInit,this.options.DisplayKey);
    }
  }

  SelectItem(data:RadioWidgetModel){
    console.log('Selected Item',data);
    this.onRadioBoxSelect.emit(data.Item);
  }
}
