import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {

  constructor(private Api: ApiService){} 

  ngOnInit() {
    this.getAppointments();
  }

  data:AppointmentsType[];
  errorMessage:any;
  searchText: string;
  page:number;
  getAppointments() {
      this.Api.getAppointments(this.page)
         .subscribe(res => {this.data = res as AppointmentsType[];},
                  error =>  this.errorMessage = <any>error);
    }

  
}
export interface AppointmentsType {
  id: number;
  FKcustomerId: number;
  Date: string;
  Time: string;
  Comment: string;
}