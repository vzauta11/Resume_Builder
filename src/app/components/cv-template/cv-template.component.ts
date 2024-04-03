import { Component, OnInit } from '@angular/core';

//prime ng modules imported
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'app-cv-template',
  standalone: true,
  imports: [
    InputTextModule,
    EditorModule,
    FormsModule,
    CommonModule,
    ContactDialogComponent,
    InputNumberModule
   ],
  templateUrl: './cv-template.component.html',
  styleUrl: './cv-template.component.scss'
})

export class CvTemplateComponent {


  showProfession: boolean = true;
  showEmail: boolean = true;
  showPhone: boolean = true;
  showLocation: boolean = true;
  showBirthdate: boolean = true;
  showDialoge : boolean = false

  onShowEmail(event: boolean) {
    this.showEmail = event;
  }

  onShowPhone(event: boolean) {
    this.showPhone = event;
  }

  onShowBirthdate(event: boolean) {
    this.showBirthdate = event;
  }

  onShowLocation(event: boolean) {
    this.showLocation = event;
  }

  onShowProfession(event: boolean) {
    this.showProfession = event;
  }

  onCloseDialoge(event:boolean) {
    this.showDialoge = event
  }

  onShowDialoge() {
    this.showDialoge = true
  }


}
