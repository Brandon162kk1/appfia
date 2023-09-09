import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.page.html',
  styleUrls: ['./civil.page.scss'],
})
export class CivilPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  id:any;
  ambientesciv: any = [];
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

    this.getAmbientesciv().subscribe(res=>{
      console.log("Res", res)
      this.ambientesciv = res;
      this.name=this.ambientesciv[this.finalId].name;
      this.ubicacion=this.ambientesciv[this.finalId].ubicacion;
      this.horario=this.ambientesciv[this.finalId].horario;
      this.contacto=this.ambientesciv[this.finalId].contacto;
      this.image=this.ambientesciv[this.finalId].image;
    });
  }

  getAmbientesciv() {
    return this.http
    .get("assets/files/civil.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }


}
