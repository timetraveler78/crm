import { Component, OnInit,ViewChild } from '@angular/core';
import { InfiniteScroll } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  ngOnInit() {
  }


  constructor(public Api: ApiService) {    
    this.getUsers();
  }


  doInfinite(infiniteScroll) {
     this.getUsers();
      infiniteScroll.complete();
  }

  loadData($event)
  {
    this.doInfinite(this.infiniteScroll);
  }

page:number;
data:CustomerType[];
errorMessage:any;
searchText: string;
getUsers() {
    this.Api.getCustomers(this.page)
       .subscribe(res => {this.data = res as CustomerType[];},
                error =>  this.errorMessage = <any>error);
  }

  search()
  {
  
  }

}



export interface CustomerType {
  id: number;
  title: string;
  firstName: string;
  middleName: string;
  lastname: string;
  Phone: string;
  Email: string;
}

