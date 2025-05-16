import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaDetail2Component } from './aerolinea-detail2/aerolinea-detail2.component';
import { AerolineaListComponent } from './aerolinea-list/aerolinea-list.component';
import { AerolineaDetail1Component } from './aerolinea-detail1/aerolinea-detail1.component';

@NgModule({
  imports: [
    CommonModule],
  declarations: [AerolineaDetail2Component, AerolineaDetail1Component, AerolineaListComponent]

})
export class AerolineaModule { }
