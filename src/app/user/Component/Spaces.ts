import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export class SpaceName {
  static nospace(spa: AbstractControl): ValidationErrors | null {
    if ((spa.value as string).indexOf(' ') !== -1) {
      return {
        nospace: true,
      };
    } else {
      return null;
    }
  }
}
