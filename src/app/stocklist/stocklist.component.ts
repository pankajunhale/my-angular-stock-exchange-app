import { Component, OnInit } from '@angular/core';
import { StockListComponentService } from "app/stocklist/stocklist.component.service";
import { KeywordSearchResultModel } from "app/model/keyword.search.result.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { StockListComponentViewModel } from "app/viewmodel/stocklist.component.view.model";
import { ButtonDisplayTypeViewModel } from "app/viewmodel/button.display.type.view.model";

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StockListComponent implements OnInit {

  public vm:StockListComponentViewModel = new StockListComponentViewModel();

  constructor(
    private componentService: StockListComponentService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
        if(params.keyword){
          this.vm.SearchTerm = params.keyword;   
        }
    });
  }

  ngOnInit() {
    this.Init();
  }

  private Init(){
    // bind search result..
    this.BindSearchResult(this.vm.SearchTerm);
    // bind button type 
    this.BindButtonType();
  }

  public DisplayDetails(model:KeywordSearchResultModel): string {
    return this.componentService.FindRouteToShowDetails(model);
  }


  
  private BindSearchResult(term:string):void{
    this.componentService.Find(term).subscribe(
      (result: Array<KeywordSearchResultModel>) => {
        this.vm.KeywordSearchResult = result;
        this.BindButtonType();
      });
      
  }

  private BindButtonType():void{
    this.componentService.FindButtonDisplayType().subscribe((result)=>{
      this.vm.KeywordSearchResult.forEach((item:KeywordSearchResultModel) => {
        item.ButtonDisplayType = result;
      });
    });
  }

  public onSelectionChange(e:any,selectedModel:ButtonDisplayTypeViewModel,listOfButtonType:Array<ButtonDisplayTypeViewModel>):void{
   listOfButtonType = this.componentService.SetSelectButtonType(listOfButtonType,selectedModel);
  }

}
