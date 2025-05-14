import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainServiceService } from '../../../shared/services/main-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-target',
  templateUrl: './add-target.component.html',
  styleUrl: './add-target.component.scss',
  standalone: false,
})
export class AddTargetComponent {

  private modalService = inject(NgbModal);
  addTargetForm: any;
  inlineNotifications: any = {
   api_success: '',
      api_failure: '',
  };
  constructor(private fb: FormBuilder, private main: MainServiceService) {
    this.addTargetForm = this.fb.group({
      companyName: ['', [Validators.required]],
    });
  }

  resetInlineNotifications() {
    this.inlineNotifications = {
      api_success: '',
      api_failure: '',
    };
  }
  close(){
    this.modalService.dismissAll();
  }

  createNewTarget() {
    let request = {
      company_name: this.addTargetForm.get('companyName').value,
    };
    this.main.createNewTarget(request).subscribe({
      next: (res: any) => {
        if (res.status == 'Failed') {
          this.inlineNotifications.api_failure = res.error;

          setTimeout(() => {
            this.resetInlineNotifications();
          }, 2000);
        }
        else{
           this.inlineNotifications.api_success = res.msg;
           this.addTargetForm.reset();
            setTimeout(() => {
            this.resetInlineNotifications();
          }, 2000);
        }
      },
    });
  }
}
