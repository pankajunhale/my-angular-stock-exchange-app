
import { Injectable } from "@angular/core";
import {environment} from '../../../environments/environment';

@Injectable()
export class BaseService {
    public ApiKey:string = environment.apiKey;
    public ApiKeyRequestParameter: string = `${'apikey='+this.ApiKey}`;
    public BaseApiUrl: string = environment.apiUrl;
    constructor(){

    }

    public FormatObject(obj: any): object{
        let i = 1;
        for (var key in obj) {
            var newProperty = key.replace(`${i}`+". ",''); 
            obj[newProperty] = obj[key];
            i = i + 1;
        }
        return obj;
    }
}