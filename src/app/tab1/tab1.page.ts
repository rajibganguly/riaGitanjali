import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  blockOwners: any = [];//Store all data from provider
  filterData = [];//Store filtered data
  filterTerm: string = '';

  constructor(private mainservice: MainService, private router: Router) {
    this.mainservice.getAllFlatOwners().subscribe((res) => { 
      this.blockOwners = res;
      //implements OnInit
    })
  }  

ionViewDidEnter(){
  //this.filterData = this.blockOwners;
}

setFilteredLocations(){
  this.filterData = this.blockOwners.filter((location) => {
    return location.name.toLowerCase().indexOf(this.filterTerm.toLowerCase()) > -1;
  });
}

getData(nm) {
  sessionStorage.setItem('owner', JSON.stringify(nm));
}

}
