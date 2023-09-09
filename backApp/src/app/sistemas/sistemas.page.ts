import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.page.html',
  styleUrls: ['./sistemas.page.scss'],
})
export class SistemasPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  id:any;
  ambientessis: any = [];
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

    this.getAmbientessis().subscribe(res=>{
      console.log("Res", res)
      this.ambientessis = res;
      this.name=this.ambientessis[this.finalId].name;
      this.ubicacion=this.ambientessis[this.finalId].ubicacion;
      this.horario=this.ambientessis[this.finalId].horario;
      this.contacto=this.ambientessis[this.finalId].contacto;
      this.image=this.ambientessis[this.finalId].image;
    });
  }

  getAmbientessis() {
    return this.http
    .get("assets/files/sistemas.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

}
