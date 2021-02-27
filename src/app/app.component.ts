import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-lecture11';

  constructor(private router: Router) {}

  goMod1() {
    this.router.navigate(['mod1']);
  }

  goMod1WithQuery() {
    this.router.navigate(['mod1', '4', '5', '1'], { queryParams: { q1: 2 } });
  }

  /*   goMod1Universal(url: string, params: string[], queryParams){
    var strArray: string[] = [];
    this.router.navigate(['mod1','4', '5', '1']);
  } */
}
