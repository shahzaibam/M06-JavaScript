import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulari: FormGroup;
  logFalso: boolean = false;

  constructor(private myHttpService: HttpService, private router: Router) {
    if (this.myHttpService.usuariData()) {
      this.router.navigate(['/home']);
    }

    this.formulari = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasenya: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  checkLogin(): void {
    if (this.formulari.valid) {
      const loginData = {
        email: this.formulari.get('email')?.value,
        password: this.formulari.get('contrasenya')?.value
      };

      this.myHttpService.validateLogin(loginData).subscribe(
        response => {
          if (!response.error) {
            this.router.navigate(['/']);
          } else {
            console.error('Login failed:', response.data);
            this.logFalso = true;
          }
        },
        error => {
          console.error('Error al hacer login:', error);
          this.logFalso = true;
        }
      );

    }
  }
}
