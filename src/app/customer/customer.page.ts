import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScroll } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CustomerType } from '../customers/customers.page'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  id: number;
 errorMessage: any;
  public customer: CustomerType;

  constructor(public Api: ApiService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id']
    });
   
  }

 
  ngOnInit() {
    this.getCustomer();
  }

  currentUser: any;

  getCustomer() {
    this.Api.getCustomer(this.id)
      .subscribe(res => { this.customer = res[0] as CustomerType; 
        console.log(this.customer);},
        error => this.errorMessage = <any>error);     
  }

  saveCustomer()
  {
    console.log("saved");
  }

}

