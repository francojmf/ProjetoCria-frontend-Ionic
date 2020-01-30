import { Component, OnInit } from '@angular/core';

import { CategoriaDTO } from 'src/models/categoria.dto';
// import { API_CONFIG } from '../../config/api.config';
import { NavController, NavParams } from '@ionic/angular';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

   bucketUrl: string = API_CONFIG.bucketBaseUrl;

   items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService
  ) { }

  ionViewDidLoad() {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {});
  }

  // tslint:disable-next-line: variable-name
  showProdutos(categoria_id: string) {
    this.navCtrl.pop();
    // this.navCtrl.push('ProdutosPage', {categoria_id});
  }

  ngOnInit() {
  }

}
