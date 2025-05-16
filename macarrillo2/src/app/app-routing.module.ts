import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AerolineaListComponent } from './aerolinea/aerolinea-list/aerolinea-list.component';
import { AerolineaDetail1Component } from './aerolinea/aerolinea-detail1/aerolinea-detail1.component';
import { AerolineaDetail2Component } from './aerolinea/aerolinea-detail2/aerolinea-detail2.component';

const routes: Routes = [
  {path: '', component: AerolineaListComponent},
  {path: 'aerolineas', component: AerolineaListComponent},
  {path: 'aerolineas/:id', component: AerolineaDetail1Component},
   {path: 'aerolineas/:id/:id', component: AerolineaDetail2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
