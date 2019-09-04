import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {
  public title :string = 'Event Binding';
  public username : string = '';
  public name : string = '';
  constructor() { }

  ngOnInit() {
  }

  onClickMe(event)
  {
    console.log(event.target.innerText);
  }

  onDbClickMe(event)
  {
    console.log(event.target.innerText);
  }

  onKeyUp(event)
  {
    console.log(event);
    this.username = event.target.value;
  }

  onKeyUpEnter(event)
  {
      this.name = event.target.value;
  }

}
