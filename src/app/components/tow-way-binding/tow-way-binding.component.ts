import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tow-way-binding',
  templateUrl: './tow-way-binding.component.html',
  styleUrls: ['./tow-way-binding.component.css']
})
export class TowWayBindingComponent implements OnInit {
  public title : string = 'Two Way Binding';
  public name : string = '';
  public gender : number = 0;
  constructor() { }

  ngOnInit() {
  }

}
