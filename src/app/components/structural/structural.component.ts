import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  constructor() { }
  public isShow : boolean = true;
  public username :string = "nguyen van anh";
  public isChecked : boolean = false;
  public age : number = 0;
  ngOnInit() {
  }

  onToggle ()
  {
      this.isShow = !this.isShow;
  }

  onChange(value)
  {
      this.isChecked = value;
  }
}
