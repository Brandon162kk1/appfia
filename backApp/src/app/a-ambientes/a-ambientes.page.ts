import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-a-ambientes',
  templateUrl: './a-ambientes.page.html',
  styleUrls: ['./a-ambientes.page.scss'],
})
export class AAmbientesPage implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ambientesaero: any = [];

  ngOnInit() {
    this.getAmbientesaero().subscribe(res=>{
      console.log("Res", res)
      this.ambientesaero = res;
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
