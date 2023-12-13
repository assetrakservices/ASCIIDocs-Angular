import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMenuVisible: boolean = true; 
  isadmin: boolean = true;
  constructor(private router: Router) { }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
