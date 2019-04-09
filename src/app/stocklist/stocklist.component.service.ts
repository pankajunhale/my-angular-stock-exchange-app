import {Injectable} from '@angular/core';
import { Observable} from "rxjs/Observable";
import { AlphaVantageKeywordSearchService } from "app/services/alphavantage.keyword.search.service";
import { KeywordSearchResultModel } from "app/model/keyword.search.result.model";
import { ButtonDisplayTypeViewModel } from "app/viewmodel/button.display.type.view.model";
import { TIME_SERIES_DAILY, TIME_SERIES_WEEKLY, TIME_SERIES_MONTHLY } from "app/common/constant/app.service.constant";
import { of } from "rxjs/observable/of";

@Injectable()
export class StockListComponentService {
    constructor(private service: AlphaVantageKeywordSearchService){
        
    }

    public Find(term: string): Observable<KeywordSearchResultModel[]>{
        return this.service.Find(term);
    }

    public FindButtonDisplayType():Observable<Array<ButtonDisplayTypeViewModel>>{
        const list:Array<ButtonDisplayTypeViewModel> = new Array<ButtonDisplayTypeViewModel>(); 
        for (let index = 1; index <= 3; index++) {
            let obj:ButtonDisplayTypeViewModel = null;
            if(index === 1){
                obj = new ButtonDisplayTypeViewModel(index,'Daily',TIME_SERIES_DAILY,true);
            }else if(index === 2){
                obj = new ButtonDisplayTypeViewModel(index,'Weekly',TIME_SERIES_WEEKLY,false);
            }else{
                obj = new ButtonDisplayTypeViewModel(index,'Monthly',TIME_SERIES_MONTHLY,false);
            } 
            list.push(obj);  
        }
        return of(list);
    }

    public SetSelectButtonType(listOfButtonType:Array<ButtonDisplayTypeViewModel>,selectedButtonType:ButtonDisplayTypeViewModel): Array<ButtonDisplayTypeViewModel>{
        listOfButtonType.forEach((item:ButtonDisplayTypeViewModel) => {
            if(selectedButtonType.Id === item.Id){
                item.IsChecked = true;   
            } else{
                item.IsChecked = false; 
            }
        });
        return listOfButtonType;
    }

    public FindRouteToShowDetails(selectedModel:KeywordSearchResultModel): string{
        let navigateUrl: string = '';
        navigateUrl = `${'/company/'+ selectedModel.Symbol + '/' + this.FindSelectedSeriesType(selectedModel.ButtonDisplayType) }`;
        return navigateUrl.toLowerCase();
    }    

    public FindSelectedSeriesType(listOfSeriesType:Array<ButtonDisplayTypeViewModel>): string {
        let seriesType: string = '';
        listOfSeriesType.filter((item:ButtonDisplayTypeViewModel) => {
            if(item.IsChecked){
                seriesType = item.Value; 
            } 
        });
        return seriesType;
    }

}