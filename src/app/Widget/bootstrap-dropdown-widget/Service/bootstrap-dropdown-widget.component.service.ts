import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {BootstrapDropdownWidgetModel} from '../Model/bootstrap-dropdown-widget-model';

@Injectable()
export class BootstrapDropdownWidgetComponentService{

    public GenerateCollection(source:any, displayKey:string):BootstrapDropdownWidgetModel[]{
        let list: Array<BootstrapDropdownWidgetModel> = [];
            _.each(source, function(item:any, key){                
                let title = "";
                if(displayKey != undefined){
                    title = item[displayKey];
                }
                else{
                    title = item;
                }   
                let bootstrapDropdownWidgetModel = new BootstrapDropdownWidgetModel(title, item);
                list.push(bootstrapDropdownWidgetModel);
            })
        return list;

    }

     public FindSelectedItemFromCollection(list: Array<BootstrapDropdownWidgetModel>,activeItem:any,displayKey:string):BootstrapDropdownWidgetModel{
        let model:BootstrapDropdownWidgetModel = null;
        model = _.find(list,function(item:BootstrapDropdownWidgetModel){
            return (item.Title == activeItem[displayKey]);
        });
        if(model == null || model == undefined){
            console.log("@Input - ActiveItemOnInit has some invaild data...");
        }
        return model;
    }
}
