import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.page.html',
  styleUrls: ['./industrial.page.scss'],
})
export class IndustrialPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  id:any;
  ambientesind: any = [];
  finalId!: number;

  name!: string;
  horario!: string;
  contacto!: string;
  image!: string;
  ubicacion!: string;

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id",this.id)
    this.finalId=this.id-1;

    this.getAmbientesind().subscribe(res=>{
      console.log("Res", res)
      this.ambientesind = res;
      this.name=this.ambientesind[this.finalId].name;
      this.ubicacion=this.ambientesind[this.finalId].ubicacion;
      this.horario=this.ambientesind[this.finalId].horario;
      this.contacto=this.ambientesind[this.finalId].contacto;
      this.image=this.ambientesind[this.finalId].image;
    });
  }

  getAmbientesind() {
    return this.http
    .get("assets/files/industrial.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

}
