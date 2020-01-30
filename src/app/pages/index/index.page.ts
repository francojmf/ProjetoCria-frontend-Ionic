import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/home']);
  }

  produtos() {
    this.router.navigate(['/produtos']);
  }

}
