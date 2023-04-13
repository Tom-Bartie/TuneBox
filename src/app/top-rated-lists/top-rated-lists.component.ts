import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-rated-lists',
  templateUrl: './top-rated-lists.component.html',
  styleUrls: ['./top-rated-lists.component.scss']
})
export class TopRatedListsComponent {
  @Input() rowName!: string;
}
