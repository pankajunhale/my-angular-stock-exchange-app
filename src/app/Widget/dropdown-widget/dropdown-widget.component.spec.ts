import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownWidgetComponent } from './dropdown-widget.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import{DropdownWidgetOptions} from './Model/dropdown-widget-options';
import {DropdownWidgetComponentService} from './Service/dropdown-widget.component.service';

describe('DropdownWidgetComponent', () => {
  let component: DropdownWidgetComponent;
  let fixture: ComponentFixture<DropdownWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownWidgetComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      providers:[{provide: DropdownWidgetComponentService }]      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownWidgetComponent);
    component = fixture.componentInstance;
    debugger;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
