import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  blockOwners: any = [];

  constructor(private mainservice: MainService) {
    this.mainservice.getAllFlatOwners().subscribe((res) => { 
      this.blockOwners = res;
      //implements OnInit
    })
  }

}
