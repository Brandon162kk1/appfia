import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-c-ambientes',
  templateUrl: './c-ambientes.page.html',
  styleUrls: ['./c-ambientes.page.scss'],
})
export class CAmbientesPage implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ambientesciv: any = [];

  ngOnInit() {
    this.getAmbientesciv().subscribe(res=>{
      console.log("Res", res)
      this.ambientesciv = res;
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
