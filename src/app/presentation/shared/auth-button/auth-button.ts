import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  templateUrl: './auth-button.html',
  styleUrl: './auth-button.scss',
})
export class AuthButtonComponent {
  @Input() label: string = 'LOGIN';
  @Output() onClick = new EventEmitter<void>();
}
