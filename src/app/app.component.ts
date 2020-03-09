import { Component } from '@angular/core';
import { DataBaseService } from './service/DataDBService';
import { FormControl, FormGroup } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario-login';

  createFormGroup () {
    return new FormGroup ({
      email: new FormControl(''),
      name: new FormControl(''),
      message: new FormControl(''),
    });
  }

  contactForm: FormGroup;
  constructor (private dbData: DataBaseService) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {

  }

  onResetForm(){
    this.contactForm.reset();

  }

  onSaveForm () {
    console.log('Saved');
  }
}
