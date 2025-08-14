import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-share',
  templateUrl: './data-share.component.html',
  styleUrls: ['./data-share.component.css']
})
export class DataShareComponent {
filteredItems: any[] = [];
nonRelatedItems: any[] = [];
searchItem:string= '';
  constructor(){}
private automobiles:any = [
  { name: 'Car', type: 'Vehicle',color:'red' },
  { name: 'Bike', type: 'Vehicle',color:'yellow' },
  { name: 'Apple', type: 'Fruit', color:'green'},
  { name: 'Bus', type: 'Vehicle',color:'purple' },
  { name: 'Mango', type: 'Fruit',color:'lightBlue' }
];


ngOnInit() {
  const keyword = 'Vehicle';

  this.filteredItems = this.automobiles.filter((item:any) => item?.name === keyword);
  this.nonRelatedItems = this.automobiles.filter((item:any) => item.name !== keyword);

  console.log('Filtered:', this.filteredItems);
  console.log('Non-Related:', this.nonRelatedItems);
}

searchFun(){
   this.filteredItems = this.automobiles.filter((item:any) => item?.name.toUpperCase() === this.searchItem?.trim().toUpperCase());
  this.nonRelatedItems = this.automobiles.filter((item:any) => item?.name.toUpperCase() !== this.searchItem?.trim().toUpperCase());

  console.log('Filtered:', this.filteredItems,this.searchItem?.toUpperCase(),this.automobiles[0].name);
  console.log('Non-Related:', this.nonRelatedItems);
}

}
