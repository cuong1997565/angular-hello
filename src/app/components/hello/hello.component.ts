import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public name : string = "cuongnx";
  public age : number = 20;
  public isMarried : boolean = false;
  public user : object = {
     name : "cuong",
     last : "nguyen",
     age  : 22,
     isMarried : false
  }
  public imageLink : string = 'https://cdn.24h.com.vn/upload/3-2019/images/2019-09-03/Hieu-ung-Van-Hau-qua-khung-Fan-Viet-cong-pha-mang-xa-hoi-CLB-Ha-Lan-v3-1567496449-436-width660height812.jpg';
  public imgWidth : number =500;
  public isValid : boolean = false;
  public tabWith : number = 500;
  public border : number = 1;

  public isBorder : boolean = true;
  public isChecked : number = 2;
  public isSpecial : boolean = true;
  constructor() { }

  ngOnInit() {
  }

  showInfo()
  {
    return `name : ${this.user['name']}` + " " + `last : ${this.user['last']}`;
  }

}
