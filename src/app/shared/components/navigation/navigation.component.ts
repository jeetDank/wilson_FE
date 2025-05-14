import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports:[CommonModule,MatIconModule,RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  navLinks = [
    {
      link:'Home',
      name:'Home',
      logo:'',
      isHidden:false,
    },
    {
      link:'/features/company',
      name:'Targets',
      logo:'',
      isHidden:false,
    },
    
  ]

}
