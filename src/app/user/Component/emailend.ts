import { sequence } from '@angular/animations';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Ends {
  static EmailEnds(End: AbstractControl): ValidationErrors | null {
    if (!(End.value as string).includes('@gmail.com')) {
      return {
        Ends: true,
      };
    } else return null;
  }
}

export class PasswordKeyWord {
  static PasswordKeyWords(End: AbstractControl): ValidationErrors | null {
    let sequencex = /[^0-9A-z]/gi;
    if (
      (End.value as string).match(sequencex) &&
      (End.value as string).match(/[A-Z]/)
    ) {
      return null;
    } else {
      return {
        Ends: true,
      };
    }
  }
}
