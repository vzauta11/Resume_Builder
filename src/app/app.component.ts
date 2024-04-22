import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  templates!: any[];
  title='Resume_Builder'
  ngOnInit() {
      this.templates = [
          { name: 'Template 1', imageUrl: '', description: 'Description for Template 1' },
          { name: 'Template 2', imageUrl: '', description: 'Description for Template 2' },
          { name: 'Template 3', imageUrl: '', description: 'Description for Template 3' }
      ];
  }

  

}
