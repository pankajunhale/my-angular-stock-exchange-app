import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDropdownWidgetComponent } from './bootstrap-dropdown-widget.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {BootstrapDropdownWidgetComponentService} from './Service/bootstrap-dropdown-widget.component.service';


describe('BootstrapDropdownWidgetComponent', () => {
  let component: BootstrapDropdownWidgetComponent;
  let fixture: ComponentFixture<BootstrapDropdownWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapDropdownWidgetComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      providers:[{provide:BootstrapDropdownWidgetComponentService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    debugger;
    fixture = TestBed.createComponent(BootstrapDropdownWidgetComponent);
    component = fixture.componentInstance;   
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
