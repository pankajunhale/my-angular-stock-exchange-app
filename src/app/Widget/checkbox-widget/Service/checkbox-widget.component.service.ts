import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {CheckboxWidgetModel} from '../Model/checkbox-widget-model';

@Injectable()
export class CheckBoxWidgetComponentService {

    constructor(){

    }

    public FindSelectedItem():void{
        
    }
    public IsInputOptionsAreValid():boolean{
        throw "Not Implemented";               
    }
    public ValidateInputOptions(temp:any):void{
        let _that = this; 
        _.each(temp,function(value,key){
            console.log(key,_that.GetTypeOf(value));
        });
    }
    private GetTypeOf(myObject:any):string{
        return typeof(myObject);
    }
    public GenerateCollection(source:any,displayKey:string):CheckboxWidgetModel[]{
        let list: Array<CheckboxWidgetModel> = [];
        _.each(source,function(item:any,key){
            let title = "";
            if(displayKey != undefined){
                title = item[displayKey];
            }
            else{
                title = item;
            }            
            let checkboxWidgetModel = new CheckboxWidgetModel(title,item);
            list.push(checkboxWidgetModel);
        })
        return list;
    }
}