
import {Injectable} from '@angular/core';
import { 
    HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpEventType
} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { tap ,catchError } from 'rxjs/operators'; // will use in future to tap the response..
import { AppErrorHandlerDetails } from "app/model/app.error.info";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor{
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        return next.handle(req);                
    }

}

