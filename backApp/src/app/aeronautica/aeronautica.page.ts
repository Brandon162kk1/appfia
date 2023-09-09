import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-aeronautica',
  templateUrl: './aeronautica.page.html',
  styleUrls: ['./aeronautica.page.scss'],
})
export class AeronauticaPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  id:any;
  ambientesaero: any = [];
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

    this.getAmbientesaero().subscribe(res=>{
      console.log("Res", res)
      this.ambientesaero = res;
      this.name=this.ambientesaero[this.finalId].name;
      this.ubicacion=this.ambientesaero[this.finalId].ubicacion;
      this.horario=this.ambientesaero[this.finalId].horario;
      this.contacto=this.ambientesaero[this.finalId].contacto;
      this.image=this.ambientesaero[this.finalId].image;
    });
  }

  getAmbientesaero() {
    return this.http
    .get("assets/files/aeronautica.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }
}
