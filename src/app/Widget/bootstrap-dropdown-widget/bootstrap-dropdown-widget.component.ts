import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{BootstrapDropdownWidgetOptions} from './Model/bootstrap-dropdown-widget-options';
import {BootstrapDropdownWidgetModel} from './Model/bootstrap-dropdown-widget-model';
import * as _ from 'underscore';
import {BootstrapDropdownWidgetComponentService} from './Service/bootstrap-dropdown-widget.component.service';

@Component({
  selector: 'bootstrap-dropdown-widget',
  templateUrl: './bootstrap-dropdown-widget.component.html',
  styleUrls: ['./bootstrap-dropdown-widget.component.css'],
  providers:[BootstrapDropdownWidgetComponentService]
})
export class BootstrapDropdownWidgetComponent implements OnInit {
  @Input() ActiveItemOnInit: any = null;
  @Input() options: BootstrapDropdownWidgetOptions = new BootstrapDropdownWidgetOptions(); 
  @Output() OnItemSelect: EventEmitter<any> = new EventEmitter();
  public BootstrapDropdownList: Array<BootstrapDropdownWidgetModel>;
  public SelectedDropdownItem: BootstrapDropdownWidgetModel;
  constructor(private _service:BootstrapDropdownWidgetComponentService) {
   }

  ngOnInit() {
    debugger;
    this.BootstrapDropdownList = this._service.GenerateCollection(this.options.Source, this.options.DisplayKey);
    
    if(this.ActiveItemOnInit == null || this.ActiveItemOnInit == undefined){
      this.SelectedDropdownItem = _.first(this.BootstrapDropdownList);
    }
    else{      
      this.SelectedDropdownItem = this._service.FindSelectedItemFromCollection(this.BootstrapDropdownList,this.ActiveItemOnInit,this.options.DisplayKey);
    }
  }

  SelectItem(item){    
    this.SelectedDropdownItem = item;
    this.OnItemSelect.emit(item);
  }

}
