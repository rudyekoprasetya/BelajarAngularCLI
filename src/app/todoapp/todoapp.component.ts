import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // inisialisasi fungsi
    this.getData();
  }

  data: any[];
  task: string;

  //fungsi untuk tampil data
  getData() {
    // array data todo 
    this.data=['Wake Up', 'Shower', 'Breakfast' ];
  }

  // fungsi untuk simpan data
  saveTask() {
    this.data.push(this.task);
    // console.log('simpan data');
    this.task='';
  }

  // fungsi untuk hapus data
  checkTask(index) {
    // console.log(index);
    // hapus data dari array 
    this.data.splice(index,1);
  }
}
 