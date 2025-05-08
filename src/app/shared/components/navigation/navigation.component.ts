import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',

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
      // logo:'',
      isHidden:false,
    },
  ]

}
