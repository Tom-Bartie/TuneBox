import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated-album-section',
  templateUrl: './top-rated-album-section.component.html',
  styleUrls: ['./top-rated-album-section.component.scss']
})
export class TopRatedAlbumSectionComponent {
  @Input() rowName!: string;

  constructor(private route: Router){ }

  navigateToAlbumPage(){
    this.route.navigate(['AlbumPage'])
  }
 navigateToWutang(){
    this.route.navigate(['Wutang'])
  }
  navigateToJoji(){
    this.route.navigate(['Joji'])
  }
  navigateToJoey(){
    this.route.navigate(['Joey'])
  }
}
