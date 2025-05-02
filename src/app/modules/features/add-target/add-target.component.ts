import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrl: './add-target.component.scss',
  standalone:false,
})
export class AddTargetComponent {

  addTargetForm:any;
  constructor(private fb:FormBuilder){
    this.addTargetForm = this.fb.group({
      companyName:['',[Validators.required]]
    })
  }

}
