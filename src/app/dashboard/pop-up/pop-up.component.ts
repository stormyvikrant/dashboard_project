import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POPUP_TYPE} from '../../core/models/common.model';

@Component({
  selector: 'app-pop-up',
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent implements OnInit {
  @Input() user: any;
  @Input() type: POPUP_TYPE=POPUP_TYPE.EDIT; // popup type
  protected POPUP_TYPE = POPUP_TYPE;


  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>(); // triggered on "OK" in confirm mode

  ngOnInit() {
  }

  onClose(): void {
    this.close.emit();
  }

  onConfirm(): void {
    this.confirm.emit();
  }

}
