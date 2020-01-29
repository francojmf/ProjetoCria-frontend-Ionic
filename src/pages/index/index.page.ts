import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
// import { API_CONFIG } from '../../config/api.config';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

 // bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {});
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/home']);
  }

}
