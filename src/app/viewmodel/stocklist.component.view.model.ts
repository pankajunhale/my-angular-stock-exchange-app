import { ButtonDisplayTypeViewModel } from "app/viewmodel/button.display.type.view.model";
import { KeywordSearchResultModel } from "app/model/keyword.search.result.model";

export class StockListComponentViewModel {
    public KeywordSearchResult:Array<KeywordSearchResultModel> = new Array<KeywordSearchResultModel>();
    public SearchTerm:string = '';
    public SelectedButtonType:ButtonDisplayTypeViewModel = null;
    constructor(){

    }
}