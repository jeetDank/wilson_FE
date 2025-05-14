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
  companyDetails = {
    "company_name":'NA',
    "unique_attrib_count":"NA",
    "total_records":"NA",
    "min":"NA",
    "max":"NA"
  };


  fetchFinancialAttribs(cik:any){
    this.main.getfinancialAttributes(cik).subscribe((res)=>{
     if(res.data && res.data.length > 0){
      let keys = [  "FY","Attribute Code","Value","Source Tags", "Attribute Type","Unit","Confidence Flag","Last Updated" ]
      this.data = res.data.map((record:any)=>{
        return {
           "FY":record.fy,"Attribute Code":record.attribute_code,"Value":record.value,"Source Tags":record.source_tags, "Attribute Type":record.attribute_type,"Unit":record.unit,"Confidence Flag":record.confidence_flag,"Last Updated":record.last_updated,
        }
      })

      this.headers = keys;
      this.data = this.data;
      this.companyDetails.company_name = res.company_data?.name;
      this.companyDetails.total_records = res.data.length;
      this.companyDetails.unique_attrib_count = res.unique_attrib_count;
      this.companyDetails.min = res.fy.min,
      this.companyDetails.max = res.fy.max

      



     
      
      
     }
      
    })
  }

  ngOnInit(): void {

    this.main.company_cik_number$.subscribe({
      next:(res)=>{
        if(res){
          console.log('das',res);
          this.fetchFinancialAttribs(res)
        }
        
      }
    })
    
  }



}
