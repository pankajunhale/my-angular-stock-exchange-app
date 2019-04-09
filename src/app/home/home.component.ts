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
    this.Init();
  } 

  private Init(){
    this.router.navigate(['/search/keyword/SONY']);
  }

}
