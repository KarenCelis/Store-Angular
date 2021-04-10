import { AbstractControl } from '@angular/forms';
export class MyValidators {
  static isPriceValid(control: AbstractControl) {
    const vlaue = control.value;
    if (vlaue > 10000) {
      return { price_invalid: true }
    }
    return null;
  }

}
