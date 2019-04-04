import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{DropdownWidgetOptions} from './Model/dropdown-widget-options';
import {DropdownWidgetModel} from './Model/dropdown-widget-model';
import * as _ from 'underscore';
import {DropdownWidgetComponentService} from './Service/dropdown-widget.component.service';
@Component({
  selector: 'dropdown-widget',
  templateUrl: './dropdown-widget.component.html',
  styleUrls: ['./dropdown-widget.component.css'],
  providers:[DropdownWidgetComponentService],
})
export class DropdownWidgetComponent implements OnInit {
  @Input() options:DropdownWidgetOptions = new DropdownWidgetOptions();
  @Input() ActiveItemOnInit:any;
  @Output() onDropdownItemSelect: EventEmitter<any> = new EventEmitter();
  public DropdownList: Array<DropdownWidgetModel>;
  public SelectedDropdownItem: DropdownWidgetModel;
  constructor(private _service:DropdownWidgetComponentService) {

   }

  ngOnInit() {
    this.DropdownList = this._service.GenerateCollection(this.options.Source, this.options.DisplayKey);
    this.SelectedDropdownItem = _.first(this.DropdownList);

    if(this.ActiveItemOnInit == null || this.ActiveItemOnInit == undefined){
      this.SelectedDropdownItem = _.first(this.DropdownList);
    }
    else{      
      this.SelectedDropdownItem = this._service.FindSelectedItemFromCollection(this.DropdownList,this.ActiveItemOnInit,this.options.DisplayKey);
    }
  
  }

  SelectItem(data:DropdownWidgetModel){       
    this.onDropdownItemSelect.emit(data.Item);
  }
}
