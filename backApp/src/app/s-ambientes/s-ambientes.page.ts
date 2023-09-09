import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-s-ambientes',
  templateUrl: './s-ambientes.page.html',
  styleUrls: ['./s-ambientes.page.scss'],
})
export class SAmbientesPage implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ambientessis: any = [];

  ngOnInit() {
    this.getAmbientessis().subscribe(res=>{
      console.log("Res", res)
      this.ambientessis = res;
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
