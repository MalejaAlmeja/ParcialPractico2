import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../Aerolinea';
import { AerolineaService } from '../aerolinea.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aerolinea-list',
  templateUrl: './aerolinea-list.component.html',
  styleUrls: ['./aerolinea-list.component.css'],
  standalone:false
})
export class AerolineaListComponent implements OnInit {
  aerolineas: Array<Aerolinea> = [];
  selected: Boolean = false;
  selectedAerolinea!: Aerolinea;
  aerolineaDetail!: Aerolinea;
  constructor(private aeroService: AerolineaService,
    private router: Router
  ) { }
  getAerolineas() {
    this.aeroService.getAerolineas().subscribe(
      (data: Array<Aerolinea>) => {
        this.aerolineas = data;
      }
    );
  }
  ngOnInit() {
    this.getAerolineas();
  }
  onSelect(aerolinea: Aerolinea) {
    this.selected = true;
    this.selectedAerolinea = aerolinea;
    this.router.navigate(['aerolineas', aerolinea.id]);
  }

}
