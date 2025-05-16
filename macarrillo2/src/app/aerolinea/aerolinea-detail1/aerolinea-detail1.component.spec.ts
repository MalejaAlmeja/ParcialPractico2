/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AerolineaDetail1Component } from './aerolinea-detail1.component';

describe('AerolineaDetail1Component', () => {
  let component: AerolineaDetail1Component;
  let fixture: ComponentFixture<AerolineaDetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerolineaDetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerolineaDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
