import { Component, OnInit } from '@angular/core';
// import RestapiService
import {RestapiService} from '../../restapi.service';

@Component({
  selector: 'app-restclient',
  templateUrl: './restclient.component.html',
  styleUrls: ['./restclient.component.css']
})
export class RestclientComponent implements OnInit {

  constructor(
    // beri contructor untuk restapi
    private api:RestapiService
  ) { }

  ngOnInit(): void {
    // inisialisasi fungsi
    this.getDataApi();
  }

  // variabel untuk tampung data 
  dataSource:any=[];

  getDataApi() {
    this.api.user().subscribe(data=>{
      this.dataSource=data;
      console.log(data);
    },error=>{
      console.log(error);
    })
  }

}
