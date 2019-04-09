import { Injectable } from "@angular/core";
import { BaseService } from "app/common/service/base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { KeywordSearchResultModel } from "app/model/keyword.search.result.model";
import { TIME_SERIES_WEEKLY, TIME_SERIES_DAILY, TIME_SERIES_MONTHLY } from "app/common/constant/app.service.constant";
import { StockInfoFactory } from "app/model/stock.info.factory";
import { StockInfoDailyModel } from "app/model/stock.info.daily.model";
import { StockInfoMonthlyModel } from "app/model/stock.info.monthly.model";

@Injectable()
export class AlphaVantageSearchService  extends BaseService {
    
    constructor(private http:HttpClient){
        super();
    }

    public Find(term:string,type:string):Observable<StockInfoDailyModel[]> | Observable<StockInfoMonthlyModel[]> {
        const list:Array<StockInfoDailyModel> = new Array<StockInfoDailyModel>();
        return this.http.get(this.GetKeyWordSearchApiEndPoint(term,type)).map((response:any)=>{            
                return new StockInfoFactory().FindStockInfo(response,type);
        });        
    }
    
    private GetKeyWordSearchApiEndPoint(term: string,type:string): string{
        let result: string = '';
        let parameter:string = '';
        switch (type) {
            case TIME_SERIES_DAILY:
                parameter = `${'?function='+TIME_SERIES_DAILY+'&symbol='+term}`;
            break;
            case TIME_SERIES_WEEKLY:
                parameter = `${'?function='+TIME_SERIES_WEEKLY+'&symbol='+term}`;
            break;
            case TIME_SERIES_MONTHLY:
                parameter = `${'?function='+TIME_SERIES_MONTHLY+'&symbol='+term}`;
            break;        
        }
        result = `${this.BaseApiUrl+parameter+term+'&'+this.ApiKeyRequestParameter}`;
        return result;
    }

    private FindByDaily(){
        
    }

    private FindByWeekly(){

    }

    private FindByMonthly(){

    }

    private FindByIntraDay(){
        
    }

   

}