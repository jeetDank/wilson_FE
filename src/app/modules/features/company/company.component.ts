import { Component, inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from '../../../shared/components/navigation/navigation.component';
import { AddTargetComponent } from '../add-target/add-target.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MainServiceService } from '../../../shared/services/main-service.service';

@Component({
  selector: 'app-company',
  standalone:false,
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit{

  private modalService = inject(NgbModal);
  companies:any = [];
  constructor(private main:MainServiceService){

  }
  openModal(){
    this.modalService.open(AddTargetComponent)
  }

  ngOnInit(): void {
    this.fetchCompanies();
  }

  fetchCompanies(){
    this.main.getCompanies().subscribe((res)=>{
      if(res.data){
        this.companies = res.data.map((record:any)=>{
          return {
            name:record.name,
            factAvailable:record.view ==1 ? true:false
          }
        })
      }
      
      
    })
  }


}
