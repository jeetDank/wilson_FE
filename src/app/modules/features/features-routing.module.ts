import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { HomeComponent } from './home/home.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
