import { Component } from '@angular/core';
import { LoginComponent } from './presentation/features/login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'angular';
}

export { App as AppComponent };
