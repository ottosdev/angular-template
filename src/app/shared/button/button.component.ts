import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() loading!: boolean;
  @Input() label!: string;
  @Input() icon?: string;
  @Input() iconPos: 'left' | 'right' = 'left';
  @Input() handleClick!: () => void;
  @Input() type: 'button' | 'submit' = 'button';
}
