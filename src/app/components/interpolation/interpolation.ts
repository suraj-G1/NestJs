import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {

  // Constructor is method which will execute first whenever the object/instance is created
  constructor() {
    console.log("In interpolation")
  }


  // Interpolation is used to show dynamic/component data in html template


  // Property
  sum = 0;

  //Method
  getSum() {
    return 70;
  }

}
