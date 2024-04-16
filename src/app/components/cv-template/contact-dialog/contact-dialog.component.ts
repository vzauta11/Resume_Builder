import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-contact-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, FormsModule, InputSwitchModule],
  templateUrl: './contact-dialog.component.html',
  styleUrl: './contact-dialog.component.scss',
})
export class ContactDialogComponent {

  //
  @Input() showDialog!: boolean;
  @Output() showDialogChange = new EventEmitter<boolean>();

  onShowDialoge() {
    this.showDialogChange.emit(false);
  }

  //
  @Input() showEmail!: boolean;
  @Output() showEmailChange = new EventEmitter<boolean>();

  onShowEmail() {
    this.showEmailChange.emit(this.showEmail);
  }
  // showPhone
  @Input() showPhone!: boolean;
  @Output() showPhoneChange = new EventEmitter<boolean>();

  onShowPhone() {
    this.showPhoneChange.emit(this.showPhone);
  }

  // showBirthdate
  @Input() showBirthdate!: boolean;
  @Output() showBirthdateChange = new EventEmitter<boolean>();

  onShowBirthdate() {
    this.showBirthdateChange.emit(this.showBirthdate);
  }

  // showProfession
  @Input() showProfession!: boolean;
  @Output() showProfessionChange = new EventEmitter<boolean>();

  onShowProfession() {
    this.showProfessionChange.emit(this.showProfession);
  }

  // showLocation
  @Input() showLocation!: boolean;
  @Output() showLocationChange = new EventEmitter<boolean>();

  onShowLocation() {
    this.showLocationChange.emit(this.showLocation);
  }
}
