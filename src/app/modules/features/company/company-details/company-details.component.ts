import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../../../shared/services/main-service.service';

@Component({
  selector: 'app-company-details',
  standalone:false,
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss'
})
export class CompanyDetailsComponent implements OnInit{


  constructor(private main:MainServiceService){

  }

  data:any = []
  headers:any = []


  fetchFinancialAttribs(cik:any){
    this.main.getfinancialAttributes(cik).subscribe((res)=>{
     if(res.data && res.data.length > 0){
      console.log(res.data);
      
      this.headers = Object.keys(res.data[0]);
      this.data = res.data.map((data:any)=>Object.values(data))
      
     }
      
    })
  }

  ngOnInit(): void {
    this.fetchFinancialAttribs({cik:"0000720005"})
  }



}
