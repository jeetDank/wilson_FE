import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navigation',
  imports:[CommonModule,MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  navLinks = [
    {
      link:'Home',
      logo:'',
      isHidden:false,
    },
    {
      link:'Company',
      logo:'',
      isHidden:false,
    },
  ]

}
