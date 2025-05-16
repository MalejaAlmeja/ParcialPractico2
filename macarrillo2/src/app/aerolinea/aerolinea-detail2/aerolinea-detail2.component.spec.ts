/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AerolineaDetail2Component } from './aerolinea-detail2.component';

describe('AerolineaDetail2Component', () => {
  let component: AerolineaDetail2Component;
  let fixture: ComponentFixture<AerolineaDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerolineaDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerolineaDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
