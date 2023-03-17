import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }
  coins() {
    this.router.navigate([{outlets: { 'Nora' : ['product', 'blue']}}]);
  }
  notes() {
    this.router.navigate([{outlets: { 'Theo' : ['product', 'red']}}]);
  }
}
