import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geometri',
  templateUrl: './geometri.component.html',
  styleUrls: ['./geometri.component.css']
})
export class GeometriComponent implements OnInit {
  sideA: any = "";
  sideB: any = "";
  kvadratResultatAreal: any = "";
  kvadratResultatOmkreds: any = "";
  rectangleResultatAreal: any = "";
  rectangleResultatOmkreds: any = "";

  hoverMouse = "hover:hover";
  ClassToApply = false;

  MathKvadrat() {
    this.kvadratResultatAreal = parseInt(this.sideA) * (this.sideA);
    this.kvadratResultatOmkreds = parseInt(this.sideA) * 4;
  }

  MathRectangle() {
    this.rectangleResultatAreal = parseInt(this.sideA) * (this.sideB);
    this.rectangleResultatOmkreds = parseInt((this.sideA) + (this.sideB)) * 2;
  }

  constructor() {
  }
  ngOnInit(): void {
  }
}