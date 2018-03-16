import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';//EDITED PATH
Dish=[
{
"name": "Harrise",
"image": "/assets/images/uthappizza.png",
"category": "mains",
"label": "Hot",
"price": "4.99",
"description": "A unique combination of dagethmazz and lawas"
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  onSelect(){
  //work here
  //make an http request and fetch jason data
  //get output in tabular form);
  /*var app=angular.module("tut",[]);
  app.controller(myCtrl,function($scope,$http)){
    var x=$http.get("pak.json")
    *.then(function(response){
    $scope.friends=response.data;*/
  console.log("hi")}

constructor() { };

  ngOnInit() {
  }

}//class colose
