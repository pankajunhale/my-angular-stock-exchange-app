import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BaseComponent} from '../app.base.component';
import { AlphaVantageKeywordSearchService } from "app/services/alphavantage.keyword.search.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  
})
export class HomeComponent extends BaseComponent {
  public WidgetList:any;
  constructor(private router:Router,private keywordSearchService: AlphaVantageKeywordSearchService) {
    super();
    this.WidgetList = [
      {Id:1,Name:"Radio Box",Path:"radio"},
      {Id:1,Name:"Checkbox",Path:"contact"},
      {Id:1,Name:"Dropdown",Path:"about"},
      {Id:1,Name:"Bootstrap Dropdown",Path:"bootstrapDropdown"},
      {Id:1,Name:"Date Picker",Path:"datepicker"}
    ]
    this.Init();
  } 

  public DisplayWidget(item:any):void{    
    this.router.navigate([item.Path],{queryParams:{},replaceUrl:true}); 
  }

  private Init(){
    this.keywordSearchService.Find('sony').subscribe(
      (result)=>{
        console.log(result);
        this.WidgetList = result;
      },
      (error)=>{
      });
  }
}
