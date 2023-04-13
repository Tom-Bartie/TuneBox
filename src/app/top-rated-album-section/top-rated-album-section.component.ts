import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-top-rated-album-section',
  templateUrl: './top-rated-album-section.component.html',
  styleUrls: ['./top-rated-album-section.component.scss']
})
export class TopRatedAlbumSectionComponent {
  @Input() rowName!: string;
}
