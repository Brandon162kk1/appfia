import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
@Component({
  selector: 'app-i-ambientes',
  templateUrl: './i-ambientes.page.html',
  styleUrls: ['./i-ambientes.page.scss'],
})
export class IAmbientesPage implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ambientesind: any = [];

  ngOnInit() {
    this.getAmbientesind().subscribe(res=>{
      console.log("Res", res)
      this.ambientesind = res;
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
