import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-ofi-ambientes',
  templateUrl: './ofi-ambientes.page.html',
  styleUrls: ['./ofi-ambientes.page.scss'],
})
export class OfiAmbientesPage implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ambientesofi: any = [];

  ngOnInit() {
    this.getAmbientesofi().subscribe(res=>{
      console.log("Res", res)
      this.ambientesofi = res;
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
