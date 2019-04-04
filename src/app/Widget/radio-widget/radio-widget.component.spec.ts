import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioWidgetComponent } from './radio-widget.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {RadioWidgetComponentService} from './Service/radio-widget.component.service';
import{RadioWidgetOptions} from './Model/radio-widget-options';
import {RadioWidgetModel} from './Model/radio-widget-model';


describe('RadioWidgetComponent', () => {
  let component: RadioWidgetComponent;
  let fixture: ComponentFixture<RadioWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioWidgetComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      providers:[{provide:RadioWidgetComponentService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
