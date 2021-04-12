import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
   }

  ngOnInit(): void {
  }
  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const email = this.form.value;
    }
    console.log(this.form.value)
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pw: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],

    });
  }

  get EmailField() {
    return this.form.get('email');
  }


  get PwField() {
    return this.form.get('pw');
  }
}
