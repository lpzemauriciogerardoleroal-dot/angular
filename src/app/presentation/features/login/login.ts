import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthInputComponent } from '../../shared/auth-input/auth-input';
import { AuthButtonComponent } from '../../shared/auth-button/auth-button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, AuthInputComponent, AuthButtonComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  username = '';
  password = '';
  loading = false;
  errorMessage = '';

  realizarLogin() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, completa ambos campos.';
      return;
    }

    this.loading = true;
    console.log('Iniciando sesión con:', this.username, this.password);

    setTimeout(() => {
      this.loading = false;
      alert(`Bienvenido, ${this.username}`);
    }, 1000);
  }
}
