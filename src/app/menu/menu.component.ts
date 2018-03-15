import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
<div class="container"
     fxLayout="column"
     fxLayoutGap="10px">

<md-list fxFlex>
  <md-list-item *ngFor="let dish of dishes">
    <img md-list-avatar src={{dish.image}} alt={{dish.name}}>
    <h1 md-line> {{dish.name}} </h1>
    <p md-line>
      <span> {{dish.description}} </span>
    </p>
  </md-list-item>
</md-list>

</div>
