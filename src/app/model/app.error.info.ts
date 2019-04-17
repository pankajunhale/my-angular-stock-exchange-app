export class AppErrorHandlerDetails {
    public Message:string = '';
    public ResponseStatusCode:string = '';
    public Url:string = '';
    public ErrorDetails:string = '';

    constructor(message:string,responseStatusCode:string,url:string,errorDetails:string){
        this.Message = message;
        this.ResponseStatusCode = responseStatusCode;
        this.Url = url;
        this.ErrorDetails = errorDetails;
    }
}