import { Component } from '@angular/core';

@Component({
  selector: 'app-tiffins',
  templateUrl: './tiffins.component.html',
  styleUrls: ['./tiffins.component.scss']
})
export class TiffinsComponent {
products : any = [{name:"Apple",price:100}];
}
