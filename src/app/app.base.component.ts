import {OnInit} from '@angular/core';

export class BaseComponent implements OnInit{
    ngOnInit(): void {
        console.log('b',new Date());
    }
    constructor() {
    }
}