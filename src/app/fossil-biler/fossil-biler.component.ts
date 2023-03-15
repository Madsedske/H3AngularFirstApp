import { Component } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { FossilBilerData } from '../fossil-biler-data';
import { DataSource } from '@angular/cdk/collections';
import { FossilBilerService } from '../fossil-biler.service';

@Component({
  selector: 'app-fossil-biler',
  templateUrl: './fossil-biler.component.html',
  styleUrls: ['./fossil-biler.component.css']
})

export class FossilBilerComponent {
  displayedColumns: string[] = ['id', 'name', 'hk'];
  dataToDisplay = this.dataSource.connect();

  constructor(private dataSource: FossilBilerService) {
  }
}