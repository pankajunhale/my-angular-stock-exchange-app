import { StockInfoDailyModel } from './stock.info.daily.model';
import { StockInfoWeeklyModel } from './stock.info.weekly.model';
import { StockInfoMonthlyModel } from './stock.info.monthly.model';
import { TIME_SERIES_DAILY, TIME_SERIES_WEEKLY, TIME_SERIES_MONTHLY } from "app/common/constant/app.service.constant";

export class StockInfoFactory{
    FindStockInfo(data:any,type?:string):StockInfoDailyModel[];
    FindStockInfo(data:any,type: 'daily'): StockInfoDailyModel[];
    FindStockInfo(data:any,type: 'weekly'): StockInfoWeeklyModel[];
    FindStockInfo(data:any,type: 'monthly'): StockInfoMonthlyModel[];

    public FindStockInfo(info: any,type:string): StockInfoDailyModel[] | StockInfoWeeklyModel[] | StockInfoMonthlyModel[] {
        try {           
            if(type == TIME_SERIES_DAILY){
                return new StockInfoDailyModel().FormatMyObject(info);
            }
            else if(type == TIME_SERIES_DAILY){
                return new StockInfoWeeklyModel().FormatMyObject(info);
            }
            else if(type == TIME_SERIES_DAILY){
                return new StockInfoMonthlyModel().FormatMyObject(info);
            }
            else {
                // default...
                return new StockInfoDailyModel().FormatMyObject(info);
            }
        } catch (error) {
            throw "error in StockInfoFactory";            
        }
    }  
}