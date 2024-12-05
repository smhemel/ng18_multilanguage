import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = [
    {
      category: "home.clothing.title",
      description: 'home.clothing.description',
      image: 'https://dummyimage.com/720x400'
    },
    {
      category: "home.electronics.title",
      description: 'home.electronics.description',
      image: 'https://dummyimage.com/721x401'
    },
    {
      category: "home.cosmeticsBodyCare.title",
      description: 'home.cosmeticsBodyCare.description',
      image: 'https://dummyimage.com/722x402'
    }
  ]
}
