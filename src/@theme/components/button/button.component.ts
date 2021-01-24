import { Component, EventEmitter, Input, Output } from '@angular/core';
import { systemAnimations } from '@theme/animations';

export type ButomType = 'normal' | 'icon';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: systemAnimations,
})
export class ButtonComponent {
  @Input() icon: string;
  @Input() color: string;
  @Input() type: string;
  @Input() disabled: boolean;
  @Input() buttonType: ButomType;
  @Input() name: string;
  @Input() classes: string;
  @Input() iconImage: string;
  @Output() btnEvent: EventEmitter<Event> = new EventEmitter();

  constructor() {
    this.icon = 'add';
    this.color = 'primary';
    this.type = 'button';
    this.disabled = false;
    this.buttonType = 'normal';
    this.name = 'button';
    this.classes = '';
    this.iconImage = '';
  }

  event(): void {
    this.btnEvent.emit();
  }
}
