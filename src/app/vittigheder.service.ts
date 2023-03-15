import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { VittighederData } from './vittigheder-data';

@Injectable({
  providedIn: 'root'
})
export class VittighederService {
  private vittigheder : Array<VittighederData>;
  private vittighederSubject$: Subject<VittighederData[]> = new Subject<VittighederData[]>();
  icifejif$: Observable<VittighederData[]> = this.vittighederSubject$.asObservable();

  constructor(){
      this.vittigheder = [
          {id: 1, vittighed: "Alle børnene gik forbi lorten undtagen Stella...", punchline: "Hun troede det var Nutella."},
          {id: 2, vittighed: "Jeg overvejer at gifte mig med en tysker..", punchline: "Er det over grænsen?"},
          {id: 3, vittighed: "Hvad kalder man en indbagt haj?", punchline: "Haj med dej."},
          {id: 4, vittighed: "Alle børnene gik ind i helikopteren, undtagen Ellen...", punchline: "Hun gik ind i propellen!"},
          {id: 5, vittighed: "Alle børnene gik over broen untagen Kaj...", punchline: "Han faldte ned og blev ædt af en haj."},
          {id: 6, vittighed: "Hvor mange sten har Einstein?", punchline: "En sten."},
          {id: 7, vittighed: "Hvorfor begyndte hajen aldrig på College?", punchline: "Fordi den droppede ud af Haj-School."},
          {id: 9, vittighed: "Hvorfor går de med klap for øjet i Århus?", punchline: "For at spare på lyset."},
          {id: 10, vittighed: "Hvad er farligst at ryge oppe i Rundetårn?", punchline: "Ned."}
      ]
      this.vittighederSubject$.next(this.vittigheder);
  }

  emitRandomVittighed(): Observable<VittighederData> {
      return of(this.vittigheder[Math.floor(Math.random() * this.vittigheder.length)]);
  }
}
