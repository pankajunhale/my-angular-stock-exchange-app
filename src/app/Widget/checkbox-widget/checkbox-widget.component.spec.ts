import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxWidgetComponent } from './checkbox-widget.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA , OnInit, Input, Output, EventEmitter} from "@angular/core";
import {CheckBoxWidgetOptions} from './Model/checkbox-widget.options'
import * as _ from 'underscore';
import {CheckBoxWidgetComponentService} from './Service/checkbox-widget.component.service';
import {CheckboxWidgetModel} from './Model/checkbox-widget-model';


describe('CheckboxWidgetComponent', () => {
  let component: CheckboxWidgetComponent;
  let fixture: ComponentFixture<CheckboxWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxWidgetComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      providers:[{provide : CheckBoxWidgetComponentService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWidgetComponent);
    debugger
    component = fixture.componentInstance;
    component.options = {};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
