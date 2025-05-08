import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { FeatureComponent } from './feature.component';
import { AddTargetComponent } from './add-target/add-target.component';
import {ReactiveFormsModule} from '@angular/forms'
import { CompanyComponent } from './company/company.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { CommonTableComponent } from '../../shared/components/common-table/common-table.component';

@NgModule({
  declarations: [
   FeatureComponent,
   AddTargetComponent,
   CompanyComponent,
   CompanyDetailsComponent
    
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FeaturesRoutingModule,
    RouterModule,
    NavigationComponent,
    CommonTableComponent

    
  ]
})
export class FeaturesModule { }
