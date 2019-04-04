import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Route} from '@angular/router';
import {IAboutQueryParameter} from './Model/aboutqueryparameter.interface';
import { CountryData } from "app/sample-data";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  options:any;
  ActiveItemOnInit:any;
  private data = CountryData;
  constructor() {
    
    this.options ={
      Source:this.data,
      DisplayKey:'name'
    }
    this.ActiveItemOnInit =  {name: 'India', code: 'IN'};
   }

  ngOnInit() {
   
  }

  public OnDropdownItemSelect(item):void{    
    console.log(item);
  }


}
