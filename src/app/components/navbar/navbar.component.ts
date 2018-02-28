import { Component, OnInit } from '@angular/core';

// providers
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _auth: AuthService) {
    this._auth.handleAuthentication();
  }

  ngOnInit() {
  }

  login() {
    this._auth.login();
  }

  salir() {
    this._auth.logout();
  }

}
