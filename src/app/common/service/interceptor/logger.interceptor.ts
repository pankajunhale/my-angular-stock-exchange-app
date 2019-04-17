import {Injectable} from '@angular/core';
import { 
    HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpEventType, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { tap, catchError } from 'rxjs/operators'; // will use in future to tap the response..

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log(`Request Url: , ${req.url}`);        
        return next.handle(req);        
    }
}