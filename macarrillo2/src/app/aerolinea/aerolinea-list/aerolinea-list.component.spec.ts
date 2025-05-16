/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AerolineaListComponent } from './aerolinea-list.component';

describe('AerolineaListComponent', () => {
  let component: AerolineaListComponent;
  let fixture: ComponentFixture<AerolineaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerolineaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerolineaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
