import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  angka1: number; 
  angka2: number;
  hasil: number;

  hitung(e){
    let a=this.angka1;
    let b=this.angka2;
    if(e=='kali') {
      this.hasil=a*b;
    } else if(e=='bagi') {
      this.hasil=a/b;
    } else if(e=='tambah') {
      this.hasil=a+b;
    } else if(e=='kurang') {
      this.hasil=a-b;
    }    

    console.log(this.hasil);


  }

}
