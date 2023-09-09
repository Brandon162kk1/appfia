import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.page.html',
  styleUrls: ['./oficinas.page.scss'],
})
export class OficinasPage implements OnInit {

  constructor(
        private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  id:any;
  ambientesofi: any = [];
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

    this.getAmbientesofi().subscribe(res=>{
      console.log("Res", res)
      this.ambientesofi = res;
      this.name=this.ambientesofi[this.finalId].name;
      this.ubicacion=this.ambientesofi[this.finalId].ubicacion;
      this.horario=this.ambientesofi[this.finalId].horario;
      this.contacto=this.ambientesofi[this.finalId].contacto;
      this.image=this.ambientesofi[this.finalId].image;
    });
  }

  getAmbientesofi() {
    return this.http
    .get("assets/files/oficinas.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

}
