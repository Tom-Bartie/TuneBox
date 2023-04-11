import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-not-first-row',
  templateUrl: './not-first-row.component.html',
  styleUrls: ['./not-first-row.component.scss']
})
export class NotFirstRowComponent {
  @Input() rowName!: string;
}
