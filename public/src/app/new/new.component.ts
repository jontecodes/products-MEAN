import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct;
  errors = [];

  constructor(private _http: HttpService,
    private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.errors = [];
    this.newProduct = {
      title: '',
      price: 0.00,
      url: ''
    };
  }

  createProduct(){
    let obs = this._http.addProduct(this.newProduct);
    obs.subscribe(data => {
      if(data['message'] === 'Failed'){
        this.errors.push(data['errors']['errors']);
      } else {
        this._router.navigate(['/products']);
      }
    })
  }


}
