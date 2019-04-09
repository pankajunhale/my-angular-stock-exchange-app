import { ButtonDisplayTypeViewModel } from "app/viewmodel/button.display.type.view.model";

export class KeywordSearchResultModel {
    public Name: string = '';
    public Symbol: string = '';
    public Region: string = '';
    public CurrencyType: string = '';
    public ButtonDisplayType: Array<ButtonDisplayTypeViewModel> = new Array<ButtonDisplayTypeViewModel>();
    
    constructor(){

    }
}