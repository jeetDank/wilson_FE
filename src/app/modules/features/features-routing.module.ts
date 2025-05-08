import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';

const routes: Routes = [
  {
    path:'',
    component:FeatureComponent,
    children:[
      {
        path:"",redirectTo:"home",pathMatch:'full'
      },  
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'company',
        component:CompanyComponent,
        
      },
      {
        path:'company/company-details',
        component:CompanyDetailsComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
