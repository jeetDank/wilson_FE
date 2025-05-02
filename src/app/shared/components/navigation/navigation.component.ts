import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',

  standalone:false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  navLinks = [
    {
      link:'Add Target',
      logo:'assets/profile_circle.svg',
      isHidden:false,
    },
  ]

}
