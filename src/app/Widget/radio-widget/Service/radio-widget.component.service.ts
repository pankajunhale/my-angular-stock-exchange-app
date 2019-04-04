import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {RadioWidgetModel} from '../Model/radio-widget-model';

@Injectable()
export class RadioWidgetComponentService{

    public GenerateCollection(source:any, displayKey:string):RadioWidgetModel[]{
        let list: Array<RadioWidgetModel> = [];
            _.each(source, function(item:any, key){                
                let title = "";
                if(displayKey != undefined){
                    title = item[displayKey];
                }
                else{
                    title = item;
                }   
                let radioWidgetModel = new RadioWidgetModel(title, item);
                list.push(radioWidgetModel);
            })
        return list;

    }

    public FindSelectedItemFromCollection(list: Array<RadioWidgetModel>,activeItem:any,displayKey:string):RadioWidgetModel{
        let radioWidgetModel:RadioWidgetModel = null;
        radioWidgetModel = _.find(list,function(item:RadioWidgetModel){
            return (item.Title == activeItem[displayKey]);
        });
        if(radioWidgetModel == null || radioWidgetModel == undefined){
            console.log("@Input - ActiveItemOnInit has some invaild data...");
            //radioWidgetModel = _.first(list);
        }
        return radioWidgetModel;
    }
}
