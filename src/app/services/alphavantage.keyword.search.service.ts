import { Injectable } from "@angular/core";
import { BaseService } from "app/common/service/base.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
import { KeywordSearchResultModel } from "app/model/keyword.search.result.model";

@Injectable()
export class AlphaVantageKeywordSearchService  extends BaseService {
    
    private KeywordSearchEndPoint:string = '';    
    constructor(private http:HttpClient){
        super();
    }

    public Find(term:string):Observable<KeywordSearchResultModel[]>{
        const list:Array<KeywordSearchResultModel> = new Array<KeywordSearchResultModel>();
        return this.http.get(this.GetKeyWordSearchApiEndPoint(term)).map((response:any)=>{            
            response['bestMatches'].forEach((item,index) => {
                const formattedItem:any = this.FormatObject(item); // <In Real Api Not Required>:: data format is not valid .. have to compute
                let obj = new KeywordSearchResultModel();
                obj.CurrencyType = formattedItem.currency;
                obj.Name = formattedItem.name; 
                list.push(obj);   
            });           
            return list;          
        });        
    }

    private GetKeyWordSearchApiEndPoint(term: string): string{
        let result: string = '';
        const parameter = 'query?function=SYMBOL_SEARCH&keywords=';
        result = `${this.BaseApiUrl+parameter+term+'&'+this.ApiKeyRequestParameter}`;
        return result;
    }

   

}