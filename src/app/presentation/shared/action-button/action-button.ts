import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  standalone: true,
  templateUrl: './action-button.html',
  styleUrl: './action-button.scss',
})
export class ActionButtonComponent {
  @Input() label: string = 'Botón';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;

  @Output() actionClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.actionClick.emit();
    }
  }
}
