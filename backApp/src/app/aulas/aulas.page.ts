import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.page.html',
  styleUrls: ['./aulas.page.scss'],
})
export class AulasPage implements OnInit {

  aulas: any = [];

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.getAulas().subscribe(res=>{
      console.log("Res", res)
      this.aulas = res;
    });
  }

  getAulas() {
    return this.http
    .get("assets/files/aulas.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

}
