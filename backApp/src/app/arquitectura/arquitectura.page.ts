import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-arquitectura',
  templateUrl: './arquitectura.page.html',
  styleUrls: ['./arquitectura.page.scss'],
})
export class ArquitecturaPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  id:any;
  ambientesarq: any = [];
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

    this.getAmbientesarq().subscribe(res=>{
      console.log("Res", res)
      this.ambientesarq = res;
      this.name=this.ambientesarq[this.finalId].name;
      this.ubicacion=this.ambientesarq[this.finalId].ubicacion;
      this.horario=this.ambientesarq[this.finalId].horario;
      this.contacto=this.ambientesarq[this.finalId].contacto;
      this.image=this.ambientesarq[this.finalId].image;
    });
  }

  getAmbientesarq() {
    return this.http
    .get("assets/files/arquitectura.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

}
