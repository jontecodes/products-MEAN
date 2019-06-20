import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    let obs = this._http.getAllProducts();
    obs.subscribe(data => {
      this.allProducts = data['results'];
    });
  }
  destroyProduct(id){
    let obs = this._http.destroyProduct(id);
    obs.subscribe(data => {
    })
    this.getProducts();
  }

}
