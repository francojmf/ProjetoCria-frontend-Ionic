import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
// import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds: CredenciaisDTO = {
    email: '',
    senha: ''
  };
  auth: any;

  constructor(
    // public navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goMenu() {
    this.router.navigate(['/index']);
  }

  login() {
    this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.router.navigate(['/index']);
      },
      error => {});
  }

  signup() {
    this.router.navigate(['/home']);
  }

}
