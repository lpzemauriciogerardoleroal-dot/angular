import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-input.html',
  styleUrl: './auth-input.scss',
})
export class AuthInputComponent {
  @Input() type: 'text' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() iconPath: string = '';

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
