import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulari: FormGroup;
  logFalso: boolean = false;

  constructor(private myHttpService: HttpService, private router: Router, private authService: AuthService) {
    this.formulari = new FormGroup({
      nomUsuari: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userType: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      contrasenya: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
      confirmarContrasenya: new FormControl('', [Validators.required])
    }, { validators: this.checkPasswords });
  }

  ngOnInit(): void {
  }

  checkRegister(): void {
    if (this.formulari.valid) {
      const registerData = {
        name: this.formulari.get('nomUsuari')?.value,
        email: this.formulari.get('email')?.value,
        userType: this.formulari.get('userType')?.value,
        dni: this.formulari.get('dni')?.value,
        password: this.formulari.get('contrasenya')?.value,
      };
      this.myHttpService.validateRegister(registerData).subscribe(
        response => {
          if (response.token) {
            this.authService.register(response);
            this.router.navigate(['/']);
          } else {
            this.logFalso = true;
          }
        },
        error => {
          this.logFalso = true;
        }
      );
    }
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('contrasenya')?.value;
    let confirmPass = group.get('confirmarContrasenya')?.value;
    return pass === confirmPass ? null : { notSame: true };
  };
}
