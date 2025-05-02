import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { FeatureComponent } from './feature.component';
import { AddTargetComponent } from './add-target/add-target.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
   NavigationComponent,
   FeatureComponent,
   AddTargetComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
