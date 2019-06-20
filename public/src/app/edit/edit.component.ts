import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct;
  editID;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.editProduct = {
      title: '',
      price: 0,
      url: ''
    };

    this._route.params.subscribe((params: Params) => {
      this.editID = params['id'];
    });
    this.getProduct(this.editID);
  }
  getProduct(id){
    let obs = this._http.getOneProduct(id);
    obs.subscribe(data => {
      this.editProduct = data['result'];
    });
  }

  updateThisProduct(){
    let obs = this._http.updateProduct(this.editProduct);
    obs.subscribe(data => {
      if(data['message'] === 'Success'){
        this._router.navigate(['/products']);
      }
      console.log('Got your data', data);
      }
    )
  }

}
