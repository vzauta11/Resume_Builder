import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() showDialoge: boolean = false;

  @Output() showDialogeEmit = new EventEmitter<boolean>(true);
  @Output() showPhoneEmit = new EventEmitter<boolean>(true);
  @Output() showEmailEmit = new EventEmitter<boolean>(true);
  @Output() showBirthdateEmit = new EventEmitter<boolean>(true);
  @Output() showLocationEmit = new EventEmitter<boolean>(true);
  @Output() showProfessionEmit = new EventEmitter<boolean>(true);

  onShowEmail() {
    this.showEmailEmit.emit(this.showEmail);
  }

  onShowPhone() {
    this.showPhoneEmit.emit(this.showPhone);
  }

  onShowBirthdate() {
    this.showBirthdateEmit.emit(this.showBirthdate);
  }

  onShowLocation() {
    this.showLocationEmit.emit(this.showLocation);
  }

  onShowProfession() {
    this.showProfessionEmit.emit(this.showProfession);
  }

  showProfession: boolean = true;
  showEmail: boolean = true;
  showPhone: boolean = true;
  showLocation: boolean = true;
  showBirthdate: boolean = true;

  closeDialoge() {
    this.showDialogeEmit.emit(false)
  }
}
