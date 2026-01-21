import { Component } from '@angular/core';
import { FormComponent } from './form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent], 
  templateUrl: './app.component.html',
})
export class AppComponent {}
