import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScroll } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  ngOnInit() {
  }


  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public Api: ApiService) {
    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
  }

  items = [];

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
    this.getUsers();
  }

  loadData($event)
  {
    this.doInfinite(this.infiniteScroll);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

page:number;
data:any;
errorMessage:any;
  getUsers() {
    this.Api.getCustomers(this.page)
       .subscribe(
         res => {
           this.data = res;
           console.log(res[0].id);          
         },
         error =>  this.errorMessage = <any>error);
  }

  
}

