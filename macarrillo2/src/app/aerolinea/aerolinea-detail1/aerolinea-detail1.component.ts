import { Component, Input, OnInit } from '@angular/core';
import { Aerolinea } from '../Aerolinea';
import { ActivatedRoute, Router } from '@angular/router';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-aerolinea-detail1',
  templateUrl: './aerolinea-detail1.component.html',
  styleUrls: ['./aerolinea-detail1.component.css'],
  standalone:false
})
export class AerolineaDetail1Component implements OnInit {
  @Input() aerolineaDetail!: Aerolinea;
  aerolineaId!: string;

  selected: Boolean = false;
  selectedAerolinea!: Aerolinea;

  constructor(private route: ActivatedRoute,
    private aerolineaService: AerolineaService,
    private router: Router
  ) {}

  getAerolineaById() {
    this.aerolineaService.getAerolinea(this.aerolineaId).subscribe((data) => {
    this.aerolineaDetail = data;
    })
  }

  ngOnInit() {
    if (this.aerolineaDetail == undefined) {
      this.aerolineaId = this.route.snapshot.paramMap.get('id')!;
      if(this.aerolineaId){
        this.getAerolineaById();
      }
    }
  }

  onSelect(aerolinea: Aerolinea) {
    this.selected = true;
    this.selectedAerolinea = aerolinea;
    this.router.navigate(['aerolineas', aerolinea.id, aerolinea.id]);
  }



}
