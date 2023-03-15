import { Component, OnInit } from '@angular/core';
import { delay, Observable, Subject } from 'rxjs';
import { VittighederData } from '../vittigheder-data';
import { VittighederService } from '../vittigheder.service';

@Component({
  selector: 'app-vittigheder',
  templateUrl: './vittigheder.component.html',
  styleUrls: ['./vittigheder.component.css']
})
export class VittighederComponent implements OnInit {
  vittigheder$: Observable<VittighederData> | undefined;
  vittigheders$: Observable<VittighederData[]> | undefined;

  punchlineControl = true;

  constructor(private vittighederService: VittighederService) {
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/Audio/JokeSoundEffect.mp3";
    audio.load();
    audio.play();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.punchlineControl = true;
      this.vittigheder$ = this.vittighederService.emitRandomVittighed();
      setTimeout(() => {
        this.punchlineControl = false;
        this.playAudio();
      }, 5000);
    }, 10000);
  }
}
