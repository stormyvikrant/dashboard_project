import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {POPUP_TYPE} from '../../core/models/common.model';
import {TransformedGridUser} from '../../core/models/table-model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  imports: [CommonModule,FormsModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent  {
  @Input() userDetail!: TransformedGridUser;
  @Input() type: POPUP_TYPE = POPUP_TYPE.EDIT;
  protected POPUP_TYPE = POPUP_TYPE;

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<TransformedGridUser | null>(); // null for delete

  editedUser!: TransformedGridUser;

  ngOnChanges() {
    if (this.type === POPUP_TYPE.EDIT && this.userDetail) {
      this.editedUser = JSON.parse(JSON.stringify(this.userDetail)); // clone to avoid mutation
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onConfirm(): void {
    this.confirm.emit(this.type === POPUP_TYPE.EDIT ? this.editedUser : null);
  }
}
