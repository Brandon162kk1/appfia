import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-ar-ambientes',
  templateUrl: './ar-ambientes.page.html',
  styleUrls: ['./ar-ambientes.page.scss'],
})
export class ArAmbientesPage implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ambientesarq: any = [];

  ngOnInit() {
    this.getAmbientesarq().subscribe(res=>{
      console.log("Res", res)
      this.ambientesarq = res;
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
