import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fb;

  constructor(
    private auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fb = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.fb.get('password').value === "adv2021" && this.fb.get('email').value === "administrativo") {
      this.router.navigate(['../report/']);
      localStorage.setItem('auth', 'AUTENTICADO')
    } else {
      alert("Login ou Senha Invalido.")
    }
  }
}
