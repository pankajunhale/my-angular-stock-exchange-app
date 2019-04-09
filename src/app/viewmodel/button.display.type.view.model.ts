export class ButtonDisplayTypeViewModel{
    Id:number= 0;
    IsChecked:boolean = false;
    Name:string = '';
    Value:string = '';

    constructor(index:number,displayName:string,displayValue:string,isChecked:boolean){
        this.Id = index;
        this.Name = displayName;
        this.Value = displayValue;
        this.IsChecked = isChecked;
    }
}