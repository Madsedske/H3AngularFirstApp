import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { FossilBilerData } from './fossil-biler-data';

@Injectable({
  providedIn: 'root'
})

export class FossilBilerService extends DataSource<FossilBilerData> {
  private _dataStream = new ReplaySubject<FossilBilerData[]>();

  constructor() {
    const fossilBiler = [
      { id: 1, name: 'Hydrogen', hk: 243 },
      { id: 2, name: 'Helium', hk: 243 },
      { id: 3, name: 'Lithium', hk: 132 },
      { id: 4, name: 'Beryllium', hk: 55 },
      { id: 5, name: 'Boron', hk: 115 },
      { id: 6, name: 'Carbon', hk: 533 },
      { id: 7, name: 'Nitrogen', hk: 643 },
      { id: 8, name: 'Oxygen', hk: 424 },
      { id: 9, name: 'Fluorine', hk: 543 },
      { id: 10, name: 'Neon', hk: 312 },
    ];
    super();
    this.setData(fossilBiler);
  }

  connect(): Observable<FossilBilerData[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: FossilBilerData[]) {
    this._dataStream.next(data);
  }
}
