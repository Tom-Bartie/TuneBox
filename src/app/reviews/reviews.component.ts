import { Component, Input } from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  @Input() type: string;
  @Input() curArtist: string;

  reviews: Review[] = [
    {id: 1, artist: 'Nas', album: 'Illmatic', content: 'Great album!', likes: 0},
    {id: 2, artist: 'Tyler, The Creator', album: 'IGOR', content: ';(((((', likes: 0},
  ];

  addReview(cont: string){
    console.log(this.reviews.length)
    this.reviews.unshift({id: this.reviews[this.reviews.length-1].id, artist: this.curArtist, album: this.type, content: cont, likes: 0});
  }
}
