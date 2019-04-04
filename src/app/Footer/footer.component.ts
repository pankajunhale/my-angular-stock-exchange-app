import {Component,OnInit} from '@angular/core';

@Component({
    selector:'footer-component',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css'] 
})

export class FooterComponent implements OnInit {
    ngOnInit(): void {
        this.FooterName = new Date().getFullYear().toString();
    }
    FooterName: string;
    constructor(){        
        console.log('initialize footer...');
        this.ngOnInit();
    }
    
}
