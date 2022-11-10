import { AbstractControl } from "@angular/forms";

export class CustomValidatorsHelpers { 
    static validEmail(control: AbstractControl): { [key: string]: boolean } | null {
        const value: string = control.value;
        if (!value) return null;
    
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (regEx.test(value)) return null;
    
        return { golEmail: true };
      }
}