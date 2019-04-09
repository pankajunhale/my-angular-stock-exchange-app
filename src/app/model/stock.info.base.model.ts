export class StockInfoBaseModel{
    Open:string = '';
    High:string = '';
    Low:string = '';
    Close:string = '';
    Volume:string = '';
    Type:string = '';
    
    constructor(){

    }

    public FormatMyObject(obj: any): any{
        for (let key in obj) {
            let element = obj[key];
            console.log(element);
        }
    }
}