import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-not-first-row',
  templateUrl: './not-first-row.component.html',
  styleUrls: ['./not-first-row.component.scss']
})
export class NotFirstRowComponent {
  @Input() rowName!: string;
  constructor(private route: Router){ }
  navigateToKanye(){
    this.route.navigate(['Kanye'])
  }
  navigateToDom(){
    this.route.navigate(['DomFike'])
  }
 navigateToMaggie(){
    this.route.navigate(['Maggie'])
  }
  navigateToWeek(){
    this.route.navigate(['Week'])
  }
  navigateToDrake(){
    this.route.navigate(['Drake'])
  }
  navigateToMac(){
    this.route.navigate(['Mac'])
  }
  navigateToAlbumPage(){
    this.route.navigate(['AlbumPage'])
  }

}
