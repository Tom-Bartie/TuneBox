import { Component } from '@angular/core';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent {
  type = "Stranger in the Alps"
  artist = "Phoebe Bridgers"

  constructor() { }
}
