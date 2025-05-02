import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { FeatureComponent } from './feature.component';


@NgModule({
  declarations: [
   NavigationComponent,
   FeatureComponent
  ],
  imports: [
    
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
