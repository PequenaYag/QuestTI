import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InicioPage } from '../inicio/inicio.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  inicio(){
    this.router.navigate(['/inicio']);
  }

    senha(){
      this.router.navigate(['/senha']);
    }

    cadastro(){
      this.router.navigate(['/cadastro']);
    }
}

