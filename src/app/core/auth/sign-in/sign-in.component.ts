import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../auth.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('.3s ease-out', style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('.3s ease-in', style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class SignInComponent implements OnInit {

  public form: FormGroup;
  public signType = true;
  public signInfo = '';
  public signAction = '';
  public signActionBtn = '';

  constructor(public formBuilder: FormBuilder, public service: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.onCheckPage();
  }

  public onCheckPage(): void {
    this.signInfo = this.signType ? 'Dont have an account?' : 'Already have an account?';
    this.signAction = this.signType ? 'Sign Up now' : 'Sign In';
    this.signActionBtn = this.signType ? 'Sign In' : 'Sign Up';
  }

  public onSignType(): void {
    this.signType = !this.signType;
    this.form.reset();
    this.onCheckPage();
    console.log('testing firebase deploy')
  }

  public onSign(): void {
    this.signType ? this.onSignIn() : this.onSignUp();
  }

  public onSignIn(): void {
    this.service.signinUser(this.form.value.email, this.form.value.password)
  }

  public async onSignUp(): Promise<void> {
    const status = await this.service.signupUser(this.form.value.email, this.form.value.password);
    if (status) {
      this.signType = !this.signType;
      this.onCheckPage();
      this.onSignIn();
    }
  }

}