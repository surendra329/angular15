import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 registrationForm: FormGroup<any>;
  @Input() regForm:any=[];
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, this.ageValidator]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      this.regForm = [this.registrationForm.value];
    } else {
      console.log('Form is invalid');
    }
  }

  // Custom Validator for Age
  ageValidator(control: any) {
    const age = control.value;
    if (age !== null && (isNaN(age) || age < 18 || age > 100)) {
      return { ageInvalid: true };
    }
    return null;
  }
}
