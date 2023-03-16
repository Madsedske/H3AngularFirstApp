import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { CodeData } from './code-data';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {
  private morseCodes : Array<CodeData> | undefined;

  transform(message: string): string  {
    let morseCodeText: string = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i] !== ' ')
      morseCodeText += this.lettersToTranslate[message[i]];
      morseCodeText += ' ';
    }
    return morseCodeText.trim();
  }

  lettersToTranslate: { [key: string]: string } = {};

  constructor() {
    const morseCodes = [
      { character: "A", morse: ".-"   },
      { character: "B", morse: "-..."    },
      { character: "C", morse: "-.-."    },
      { character: "D", morse: "-.."    },
      { character: "E", morse: "."    },
      { character: "F", morse: "..-."    },
      { character: "G", morse: "--."    },
      { character: "H", morse: "...."    },
      { character: "I", morse: ".."    },
      { character: "J", morse: ".---"    },
      { character: "K", morse: "-.-"    },
      { character: "L", morse: ".-.."    },
      { character: "M", morse: "--"    },
      { character: "N", morse: "-."    },
      { character: "O", morse: "---"    },
      { character: "P", morse: ".--."    },
      { character: "Q", morse: "--.-"    },
      { character: "R", morse: ".-."    },
      { character: "S", morse: "..."    },
      { character: "T", morse: "-"    },
      { character: "U", morse: "..-"    },
      { character: "V", morse: "...-"    },
      { character: "W", morse: ".--"    },
      { character: "X", morse: "-..-"    },
      { character: "Y", morse: "-.--"    },
      { character: "Z", morse: "--.."    },
      { character: "0", morse: "-----"    },
      { character: "1", morse: ".----"    },
      { character: "2", morse: "..---"    },
      { character: "3", morse: "...--"    },
      { character: "4", morse: "....-"    },
      { character: "5", morse: "....."    },
      { character: "6", morse: "-...."    },
      { character: "7", morse: "--..."    },
      { character: "8", morse: "---.."    },
      { character: "9", morse: "----."    },
      { character: ".", morse: "·-·-·-"    },
      { character: ",", morse: "--··--"    },
      { character: "?", morse: "··--··"    },
      { character: "'", morse: "·----·"    },
      { character: "!", morse: "-·-·--"    },
      { character: "/", morse: "-··-·"    },
      { character: "(", morse: "-·--·"    },
      { character: ")", morse: "-·--·-"    },
      { character: "&", morse: "·-···"    },
      { character: ":", morse: "---···"    },
      { character: ";", morse: "-·-·-·"    },
      { character: "=", morse: "-···-"    },
      { character: "-", morse: "-····-"    },
      { character: "_", morse: "··--·-"    },
      { character: "\"", morse: "·-··-·"    },
      { character: "$", morse: "···-··-"    },
      { character: "@", morse: "·--·-·"    }
    ]
    morseCodes.forEach(element => {
      this.lettersToTranslate[element.character] = element.morse;
    });    
  }
}
