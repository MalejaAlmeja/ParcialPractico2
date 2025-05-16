import { Component, Input, OnInit } from '@angular/core';
import { Aerolinea } from '../Aerolinea';
import { ActivatedRoute } from '@angular/router';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-aerolinea-detail2',
  templateUrl: './aerolinea-detail2.component.html',
  styleUrls: ['./aerolinea-detail2.component.css'],
  standalone:false
})
export class AerolineaDetail2Component implements OnInit {

  @Input() aerolineaDetail!: Aerolinea;
  aerolineaId!: string;

  selected: Boolean = false;
  selectedAerolinea!: Aerolinea;

  constructor(private route: ActivatedRoute,
    private aerolineaService: AerolineaService,
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


}
