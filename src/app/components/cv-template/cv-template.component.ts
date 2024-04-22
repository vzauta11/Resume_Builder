import { Component, OnInit } from '@angular/core';

//prime ng modules imported
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';
//ngx-translate
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SelectButtonModule } from 'primeng/selectbutton';


@Component({
  selector: 'app-cv-template',
  standalone: true,
  imports: [
    InputTextModule,
    EditorModule,
    FormsModule,
    CommonModule,
    ContactDialogComponent,
    InputNumberModule,
    FileUploadModule,
    RatingModule,
    TranslateModule,
    SelectButtonModule
  ],
  templateUrl: './cv-template.component.html',
  styleUrl: './cv-template.component.scss',
})


export class CvTemplateComponent {


  constructor(private translateService: TranslateService) {
    this.initLanguage();
  }
  
  private initLanguage() {
    console.log('initLanguage')
    const prevLanguage = localStorage.getItem('language') || 'ka';
    console.log(prevLanguage)
    this.translateService.use(prevLanguage);
  }

  stateOptions: any[] = [{ label: 'ka', value: 'ka' },{ label: 'en', value: 'en' }];

  value: string = 'ka';
  
  setLanguage(event:any) {
    let chosenLanguage = event.value
     this.translateService.use(chosenLanguage);
     localStorage.setItem('language', chosenLanguage);
  }



  downloadAsPDF(): void {
    const element = document.querySelector('.cv-container');
    if (element) {
      const opt = {
        filename:     `${this.name}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'}
    };
    

        // Use html2pdf directly from the global scope
        (window as any).html2pdf().from(element).set(opt).save();
    }
}


  name!:string;//test
  showProfession: boolean = true;
  showEmail: boolean = true;
  showPhone: boolean = true;
  showLocation: boolean = true;
  showBirthdate: boolean = true;
  showDialoge: boolean = false;
  //
  showExperience:boolean = true;
  showEducation:boolean = true;



  onShowExperience(){
    this.showExperience = !this.showExperience
  }
  onShowEducation(){
    this.showEducation = !this.showEducation
  }

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

  onCloseDialoge(event: boolean) {
    this.showDialoge = event;
  }

  onShowDialoge() {
    this.showDialoge = true;
  }
}
